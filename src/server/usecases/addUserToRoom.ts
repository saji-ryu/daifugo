import { roomData } from "../Memory";
import emitter from "../utils/eventEmitter";
import { ArgTypes } from "../../interfaces";

const addUserToRoom = ({ roomId, userId }: ArgTypes) => {
  if (roomData[roomId]) {
    roomData[roomId].users.push(userId);
    emitter.emit("room.update.add_user", roomId);
  }
};

export default addUserToRoom;
