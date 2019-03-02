import emitter from "./utils/eventEmitter";
import { userData, roomData } from "./Memory";

const socketConnecter = (io: SocketIO.Server) => {
  io.sockets.on("connection", socket => {
    const socektUserId = socket.request.session.userI;
    emitter.on("space.update.*", () => {
      socket.emit("space.update", roomData);
    });
    emitter.on("room.update.*", (roomId: string) => {
      if (roomData[roomId].users.find(ele => ele === socektUserId).length > 0) {
        socket.emit("room.update", roomData[roomId]);
      }
    });
    emitter.on("user.update.*", (userId: string) => {
      if (socektUserId === userId) {
        socket.emit("space.update", userData[userId]);
      }
    });
  });
};

export default socketConnecter;
