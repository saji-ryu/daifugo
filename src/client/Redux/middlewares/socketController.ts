import socket from "../../utils/socket";
import { MiddlewareAPI, Dispatch, Middleware } from "redux";
import { ReduxState, Action } from "../../interfaces";

type GetState = () => ReduxState;
const socketController: Middleware = ({ getState }: { getState: GetState }) => (
  next: Dispatch
) => (action: Action) => {
  socket.emit(action.type, action.data);
  next(action);
};

export default socketController;
