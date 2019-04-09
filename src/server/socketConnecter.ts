import emitter from "./utils/eventEmitter";
import { userData, roomData, spaceData } from "./Memory";
import {
  createRoom,
  createTable,
  changePage,
  changeRoom,
  addUserToRoom,
  removeUserFromRoom,
} from "./usecases";
import _debug from "debug";

const debug = _debug("connecter");

const socketConnecter = (io: SocketIO.Server) => {
  io.sockets.on("connection", socket => {
    const socketUserId = socket.request.session.userId;
    if (socketUserId !== undefined) {
      // 初期化
      socket.emit("space.init", spaceData);
      if (userData[socketUserId]) {
        socket.emit("user.init", userData[socketUserId]);
        if (userData[socketUserId].roomId) {
          socket.emit("room.init", roomData[userData[socketUserId].roomId]);
        }
      }

      // 内部による変更
      emitter.on("space.update.*", () => {
        debug(`space updated`);
        socket.emit("space.update", spaceData);
      });
      emitter.on("room.update.*", (roomId: string) => {
        if (roomData[roomId]) {
          if (
            roomData[roomId].users.find(ele => ele === socketUserId).length > 0
          ) {
            socket.emit("room.update", roomData[roomId]);
          }
        }
      });
      emitter.on("user.update.*", (userId: string) => {
        if (socketUserId === userId) {
          debug(`user updated`);
          socket.emit("user.update", userData[userId]);
        }
      });

      // clientからのaction
      // FIXME: data型
      // TODO: userIdの照合いるんじゃね問題
      socket.on("daifugo/space/CREATE_ROOM", data => {
        createRoom(data);
      });
      socket.on("daifugo/room/CREATE_TABLE", data => {
        createTable(data);
      });
      socket.on("daifugo/room/ADD_USER_TO_ROOM", data => {
        addUserToRoom(data);
      });
      socket.on("daifugo/room/REMOVE_USER_FROM_ROOM", data => {
        removeUserFromRoom(data);
      });
      socket.on("daifugo/user/PAGE_CHANGE", data => {
        changePage({ userId: socketUserId, currentPage: data.currentPage });
      });
      socket.on("daifugo/user/ROOM_CHANGE", data => {
        changeRoom({ userId: socketUserId, roomId: data.roomId });
      });
    }
  });
};

export default socketConnecter;
