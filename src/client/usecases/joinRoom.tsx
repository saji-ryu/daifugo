import { ThunkAction, ReduxState } from "../interfaces";
import { changePage, changeRoom } from "../modules/user";
import socket from "../utils/socket";

const joinRoom = (roomId: string): ThunkAction<ReduxState> => async (
  dispatch
): Promise<void> => {
  socket.emit("user.update.joinRoom", {
    roomId,
  });
  await dispatch(changeRoom(roomId));
  dispatch(changePage("Room"));
};

export default joinRoom;
