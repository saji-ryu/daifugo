import { ThunkAction, ReduxState } from "../interfaces";
import { changePage } from "../modules/user";
import socket from "../utils/socket";

const createRoom = (): ThunkAction<ReduxState> => async (
  dispatch,
  getState
): Promise<void> => {
  socket.emit("space.create.room", {
    roomName: "test",
    isPrivate: false,
    ownerId: getState().user.userId,
  });
  dispatch(changePage("Room"));
};

export default createRoom;
