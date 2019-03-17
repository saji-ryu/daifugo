import emitter from "./utils/eventEmitter";
import { userData, roomData } from "./Memory";
import { createRoom, changePage } from "./usecases";
import _debug from "debug";

const debug = _debug("connecter");

const socketConnecter = (io: SocketIO.Server) => {
  io.sockets.on("connection", socket => {
    const socektUserId = socket.request.session.userId;
    socket.emit("user.init", userData[socektUserId]);
    socket.emit("space.init", roomData);
    emitter.on("space.update.*", () => {
      debug(`space updated`);
      socket.emit("space.update", roomData);
    });
    emitter.on("room.update.*", (roomId: string) => {
      if (roomData[roomId].users.find(ele => ele === socektUserId).length > 0) {
        socket.emit("room.update", roomData[roomId]);
      }
    });
    emitter.on("user.update.*", (userId: string) => {
      if (socektUserId === userId) {
        debug(`user updated`);
        socket.emit("user.update", userData[userId]);
      }
    });
    // FIXME:型
    socket.on("space.create.room", data => {
      debug(`space : room created`);
      createRoom(data);
    });

    socket.on("user.update.pageName", data => {
      debug(`user<${socektUserId}> : page changed to ${data.currentPage}`);
      changePage({ userId: socektUserId, currentPage: data.currentPage });
    });
  });
};

export default socketConnecter;
