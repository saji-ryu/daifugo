import { userData } from "../Memory";
import emitter from "../utils/eventEmitter";

const changePage = ({ roomId, userId }) => {
  if (userData[userId]) {
    userData[userId].roomId = roomId;
    emitter.emit("user.update.room", userId);
  }
};

export default changePage;
