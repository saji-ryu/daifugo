// Redux
import { State as UserState, Action as UserAction } from "../modules/user";
import { State as SpaceState, Action as SpaceAction } from "../modules/space";
import { State as RoomState, Action as RoomAction } from "../modules/room";

import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type ReduxState = {
  user: UserState;
  space: SpaceState;
  room: RoomState;
};

export type Action = UserAction | SpaceAction | RoomAction;

export type Socket = SocketIOClient.Socket;

export type ThunkDispatch = ThunkDispatch<ReduxState, {}, Action>;

export type GetState<S> = () => S;
export type ThunkAction<S> = (
  dispatch: Dispatch,
  getState: GetState<S>
) => Promise<void>;
