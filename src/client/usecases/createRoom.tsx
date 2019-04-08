import { ThunkAction, ReduxState } from "../interfaces";
import { changePage } from "../modules/user";
import { createRoom as createRoomAction } from "../modules/space";
import { addUserToRoom } from "../modules/room";

const createRoom = (
  roomName: string,
  isPrivate: boolean
): ThunkAction<ReduxState> => async (dispatch, getState): Promise<void> => {
  await dispatch(
    createRoomAction({ roomName, isPrivate, ownerId: getState().user.userId })
  );
  dispatch(changePage("Room"));
};

export default createRoom;
