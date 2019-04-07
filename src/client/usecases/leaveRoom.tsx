import { ThunkAction, ReduxState } from "../interfaces";
import { changePage, changeRoom } from "../modules/user";
import socket from "../utils/socket";

const leaveRoom = (roomId: string): ThunkAction<ReduxState> => async (
  dispatch
): Promise<void> => {
  socket.emit("user.update.leaveRoom", {
    roomId,
  });
  await dispatch(changeRoom(null));
  dispatch(changePage("Space"));
};

export default leaveRoom;
