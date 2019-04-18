import { userData } from "../Memory";
import emitter from "../utils/eventEmitter";
import { ArgTypes } from "../../interfaces";

const setTableId = ({ userId, tableId }: ArgTypes) => {
  if (userData[userId]) {
    userData[userId].tableId = tableId;
    emitter.emit("user.update.table", userId);
  }
};

export default setTableId;
