import { v4 as uuidv4 } from "uuid";
import { roomData, tableData, userData } from "../Memory";
import getRoomName from "./getRoomName";
import emitter from "../utils/eventEmitter";

const createTable = ({ tableName, isPrivate, ownerId, roomId }) => {
  const searchResult = Object.entries(tableData).find(ele => {
    return ele[1].tableName === tableName;
  });
  if (searchResult) {
    return;
  }
  const secretKey = isPrivate ? String(Math.random).substring(2, 4) : undefined;
  const newTableId = `t${uuidv4()}`;
  tableData[newTableId] = {
    tableId: newTableId,
    isPrivate,
    secretKey,
    tableName,
    users: [ownerId],
    roomName: getRoomName(roomId),
    match: null,
  };
  roomData[roomId].tables.push(newTableId);
  userData[ownerId].tableId = newTableId;
  emitter.emit("room.update.table_created", roomId);
  emitter.emit("user.update.roomdata", ownerId);
};

export default createTable;
