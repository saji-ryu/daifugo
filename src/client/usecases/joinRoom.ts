import { ThunkAction, ReduxState } from "../interfaces";
import { changePage, setRoomId } from "../modules/user";
import { addUserToRoom } from "../modules/room";

const joinRoom = (roomId: string): ThunkAction<ReduxState> => async (
  dispatch,
  getState
): Promise<void> => {
  await dispatch(addUserToRoom({ roomId, userId: getState().user.userId }));
  await dispatch(setRoomId(roomId));
  dispatch(changePage("Room"));
};

export default joinRoom;
