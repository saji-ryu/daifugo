import { tableData } from "../Memory";
import emitter from "../utils/eventEmitter";
import { ArgTypes } from "../../interfaces";

const addUserToTable = ({ tableId, userId }: ArgTypes) => {
  if (tableData[tableId]) {
    tableData[tableId].users.push(userId);
    emitter.emit("table.update.add_user", tableId);
  }
};

export default addUserToTable;
