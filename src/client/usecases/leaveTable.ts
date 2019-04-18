import { ThunkAction, ReduxState } from "../interfaces";
import { changePage, setTableId } from "../modules/user";
import { removeUserFromTable } from "../modules/table";

const leaveTable = (tableId: string): ThunkAction<ReduxState> => async (
  dispatch,
  getState
): Promise<void> => {
  await dispatch(
    removeUserFromTable({ tableId, userId: getState().user.userId })
  );
  await dispatch(setTableId(null));
  dispatch(changePage("Room"));
};

export default leaveTable;
