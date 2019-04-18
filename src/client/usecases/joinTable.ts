import { ThunkAction, ReduxState } from "../interfaces";
import { changePage, setTableId } from "../modules/user";
import { addUserToTable } from "../modules/table";

const joinTable = (tableId: string): ThunkAction<ReduxState> => async (
  dispatch,
  getState
): Promise<void> => {
  await dispatch(addUserToTable({ tableId, userId: getState().user.userId }));
  await dispatch(setTableId(tableId));
  dispatch(changePage("Table"));
};

export default joinTable;
