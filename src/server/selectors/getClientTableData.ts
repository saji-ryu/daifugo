import { userData, tableData } from "../Memory";
import { ClientTableData, UserDisplayData } from "../../interfaces";

const selector = (tableId: string): ClientTableData => {
  const users: UserDisplayData[] = getUserDisplayDataArray(
    tableData[tableId].users
  );
  return Object.assign({}, tableData[tableId], { users });
};

const getUserDisplayDataArray = (userIds: string[]): UserDisplayData[] => {
  return Object.entries(userData)
    .filter(ele => userIds.includes(ele[1].userId))
    .map(ele => {
      const { userId, userName } = ele[1];
      return { userId, userName };
    });
};

export default selector;
