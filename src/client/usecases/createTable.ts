import { ThunkAction, ReduxState } from "../interfaces";
import { changePage } from "../modules/user";
import { createTable as createTableAction } from "../modules/room";

const createTable = (tableName: string): ThunkAction<ReduxState> => async (
  dispatch,
  getState
): Promise<void> => {
  await dispatch(
    createTableAction({
      tableName,
      // TODO: selector使う
      ownerId: getState().user.userId,
      roomId: getState().user.roomId,
    })
  );
  dispatch(changePage("Table"));
};

export default createTable;
