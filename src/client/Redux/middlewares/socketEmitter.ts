import socket from "../../utils/socket";

import { MiddlewareAPI, Dispatch, Middleware } from "redux";
import { ReduxState } from "../../interfaces";

type Action = {
  type: string;
  data: Object;
};

type GetState = () => ReduxState;
const socketEmitter: Middleware = ({ getState }: { getState: GetState }) => (
  next: Dispatch
) => (action: Action) => {
  switch (action.type) {
    case "daifugo/user/PAGE_CHANGE":
      if (getState().user.userId) {
        socket.emit("user.update.pageName", action.data);
      }
  }
  next(action);
  console.log("after: %O", getState());
};

export default socketEmitter;
