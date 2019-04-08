import { ThunkAction, ReduxState } from "../interfaces";
import { changePage, changeRoom } from "../modules/user";
import { removeUserFromRoom } from "../modules/room";

const leaveRoom = (roomId: string): ThunkAction<ReduxState> => async (
  dispatch,
  getState
): Promise<void> => {
  await dispatch(
    removeUserFromRoom({ roomId, userId: getState().user.userId })
  );
  await dispatch(changeRoom(null));
  dispatch(changePage("Space"));
};

export default leaveRoom;
