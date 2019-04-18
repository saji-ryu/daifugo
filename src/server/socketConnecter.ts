import emitter from "./utils/eventEmitter";
import { userData, roomData, tableData } from "./Memory";
import {
  getClientSpaceData,
  getClientRoomData,
  getClientTableData,
} from "./selectors";
import {
  createRoom,
  createTable,
  changePage,
  setRoomId,
  setTableId,
  addUserToRoom,
  removeUserFromRoom,
  addUserToTable,
  removeUserFromTable,
} from "./usecases";
import {
  ClientMatchData,
  ClientRoomData,
  ClientSpaceData,
  ClientTableData,
} from "../interfaces";

import _debug from "debug";

const debug_action = _debug("server:connecter:action");

const socketConnecter = (io: SocketIO.Server) => {
  io.sockets.on("connection", socket => {
    const socketUserId: string = socket.request.session.userId;
    if (socketUserId !== undefined) {
      // 初期化
      socket.emit("space.init", getClientSpaceData());
      if (userData[socketUserId]) {
        socket.emit("user.init", userData[socketUserId]);
        if (userData[socketUserId].roomId) {
          socket.emit(
            "room.init",
            getClientRoomData(userData[socketUserId].roomId)
          );
        }
        if (userData[socketUserId].tableId) {
          socket.emit(
            "table.init",
            getClientTableData(userData[socketUserId].tableId)
          );
        }
      }

      // 内部による変更
      emitter.on("space.update.*", () => {
        const data: ClientSpaceData = getClientSpaceData();
        socket.emit("space.update", data);
      });
      emitter.on("room.update.*", (roomId: string) => {
        if (roomData[roomId]) {
          if (
            roomData[roomId].users.filter(ele => ele === socketUserId).length >
            0
          ) {
            const data: ClientRoomData = getClientRoomData(roomId);
            socket.emit("room.update", data);
          }
        }
      });
      emitter.on("table.update.*", (tableId: string) => {
        if (tableData[tableId]) {
          if (
            tableData[tableId].users.filter(ele => ele === socketUserId)
              .length > 0
          ) {
            const data: ClientTableData = getClientTableData(tableId);
            socket.emit("table.update", data);
          }
        }
      });
      emitter.on("user.update.*", (userId: string) => {
        if (socketUserId === userId) {
          socket.emit("user.update", userData[userId]);
        }
      });

      // clientからのaction
      // FIXME: data型
      // TODO: userIdの照合いるんじゃね問題
      socket.on("daifugo/space/CREATE_ROOM", data => {
        debug_action("daifugo/space/CREATE_ROOM", data);
        createRoom(data);
      });
      socket.on("daifugo/room/CREATE_TABLE", data => {
        debug_action("daifugo/room/CREATE_TABLE", data);
        createTable(data);
      });
      socket.on("daifugo/room/ADD_USER_TO_ROOM", data => {
        debug_action("daifugo/room/ADD_USER_TO_ROOM", data);
        addUserToRoom(data);
      });
      socket.on("daifugo/room/REMOVE_USER_FROM_ROOM", data => {
        debug_action("daifugo/room/REMOVE_USER_FROM_ROOM", data);
        removeUserFromRoom(data);
      });
      socket.on("daifugo/table/ADD_USER_TO_TABLE", data => {
        debug_action("daifugo/room/ADD_USER_TO_TABLE", data);
        addUserToTable(data);
      });
      socket.on("daifugo/table/REMOVE_USER_FROM_TABLE", data => {
        debug_action("daifugo/room/REMOVE_USER_FROM_TABLE", data);
        removeUserFromTable(data);
      });
      socket.on("daifugo/user/PAGE_CHANGE", data => {
        debug_action("daifugo/user/PAGE_CHANGE", data);
        changePage({ userId: socketUserId, currentPage: data.currentPage });
      });
      socket.on("daifugo/user/SET_ROOM_ID", data => {
        debug_action("daifugo/user/SET_ROOM_ID", data);
        setRoomId({ userId: socketUserId, roomId: data.roomId });
      });
      socket.on("daifugo/user/SET_TABLE_ID", data => {
        debug_action("daifugo/user/SET_ROOM_ID", data);
        setTableId({ userId: socketUserId, tableId: data.tableId });
      });
    }
  });
};

export default socketConnecter;
