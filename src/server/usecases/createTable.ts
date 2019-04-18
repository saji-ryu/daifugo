import { v4 as uuidv4 } from "uuid";
import { roomData, tableData, userData } from "../Memory";
import emitter from "../utils/eventEmitter";
import { ArgTypes } from "../../interfaces";

const createTable = ({ roomId, tableName, ownerId }: ArgTypes) => {
  const searchResult = Object.entries(tableData).find(ele => {
    return ele[1].tableName === tableName;
  });
  if (searchResult) {
    return;
  }
  const newTableId = `t${uuidv4()}`;
  tableData[newTableId] = {
    tableId: newTableId,
    roomId,
    tableName,
    users: [ownerId],
    match: "",
  };
  userData[ownerId].tableId = newTableId;
  roomData[roomId].tables.push(newTableId);
  emitter.emit("room.update.table_created", roomId);
  emitter.emit("user.update.table_created", ownerId);
  emitter.emit("table.update.table_created", newTableId);
};

export default createTable;
