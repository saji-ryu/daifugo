// Redux
import { State as UserState, Action as UserAction } from "../modules/user";
import { State as SpaceState, Action as SpaceAction } from "../modules/space";
import { State as RoomState, Action as RoomAction } from "../modules/room";
import { State as TableState, Action as TableAction } from "../modules/table";

import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type ReduxState = {
  user: UserState;
  space: SpaceState;
  room: RoomState;
  table: TableState;
};

export type Action = UserAction | SpaceAction | RoomAction | TableAction;

export type Socket = SocketIOClient.Socket;

export type ThunkDispatch = ThunkDispatch<ReduxState, {}, Action>;

export type GetState<S> = () => S;
export type ThunkAction<S> = (
  dispatch: Dispatch,
  getState: GetState<S>
) => Promise<void>;
