import { userData } from "../Memory";
import emitter from "../utils/eventEmitter";
import { ArgTypes } from "../../interfaces";

const setRoomId = ({ roomId, userId }: ArgTypes) => {
  if (userData[userId]) {
    userData[userId].roomId = roomId;
    emitter.emit("user.update.room", userId);
  }
};

export default setRoomId;
