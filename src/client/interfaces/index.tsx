// Redux
import { State as NavigationState } from "../modules/navigation";
import { State as UserState } from "../modules/user";
import { State as SpaceState } from "../modules/space";
import { Action, Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type ReduxState = {
  navigation: NavigationState;
  user: UserState;
  space: SpaceState;
};

export type Socket = SocketIOClient.Socket;

export type ThunkDispatch = ThunkDispatch<ReduxState, {}, Action>;

export type GetState<S> = () => S;
export type ThunkAction<S> = (
  dispatch: Dispatch,
  getState: GetState<S>
) => Promise<void>;
