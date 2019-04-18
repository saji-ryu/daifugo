import { roomData, userData, tableData } from "../Memory";
import {
  ClientRoomData,
  UserDisplayData,
  TableDisplayData,
} from "../../interfaces";

const selector = (roomId: string): ClientRoomData => {
  const users: UserDisplayData[] = getUserDisplayDataArray(
    roomData[roomId].users
  );
  const tables: TableDisplayData[] = getTableDispalyDataArray(
    roomData[roomId].tables
  );
  return Object.assign({}, roomData[roomId], { users, tables });
};

const getUserDisplayDataArray = (userIds: string[]): UserDisplayData[] => {
  return Object.entries(userData)
    .filter(ele => userIds.includes(ele[1].userId))
    .map(ele => {
      const { userId, userName } = ele[1];
      return { userId, userName };
    });
};

const getTableDispalyDataArray = (tableIds: string[]): TableDisplayData[] => {
  return Object.entries(tableData)
    .filter(ele => tableIds.includes(ele[1].tableId))
    .map(ele => {
      const { tableId, tableName } = ele[1];
      const users = getUserDisplayDataArray(ele[1].users);
      return { tableId, tableName, users };
    });
};

export default selector;
