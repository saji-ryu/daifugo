import { userData } from "../Memory";
import emitter from "../utils/eventEmitter";
import { ArgTypes } from "../../interfaces";

const changePage = ({ roomId, userId }: ArgTypes) => {
  if (userData[userId]) {
    userData[userId].roomId = roomId;
    emitter.emit("user.update.room", userId);
  }
};

export default changePage;
