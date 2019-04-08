import { roomData } from "../Memory";
import emitter from "../utils/eventEmitter";

const addUserToRoom = ({ roomId, userId }) => {
  if (roomData[roomId]) {
    roomData[roomId].users.push(userId);
    emitter.emit("room.update.add_user", roomId);
  }
};

export default addUserToRoom;
