import { roomData } from "../Memory";
import emitter from "../utils/eventEmitter";
import { ArgTypes } from "../../interfaces";
import { getUserName } from "../selectors";

const addUserToRoom = ({ roomId, userId }: ArgTypes) => {
  if (roomData[roomId]) {
    roomData[roomId].users.push({ userId, userName: getUserName(userId) });
    emitter.emit("room.update.add_user", roomId);
  }
};

export default addUserToRoom;
