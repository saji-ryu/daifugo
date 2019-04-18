import { tableData, roomData } from "../Memory";
import { ArgTypes } from "../../interfaces";

const removeUserFromTable = ({ tableId, userId }: ArgTypes) => {
  if (tableData[tableId]) {
    tableData[tableId].users = tableData[tableId].users.filter(
      ele => ele !== userId
    );
  }
};

export default removeUserFromTable;
