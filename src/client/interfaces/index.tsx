// Redux
import { State as NavigationState } from "../modules/navigation";
import { Action, Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type ReduxState = {
  navigation: NavigationState;
};

export type ThunkDispatch = ThunkDispatch<ReduxState, {}, Action>;

export type GetState<S> = () => S;
export type ThunkAction<S> = (
  dispatch: Dispatch,
  getState: GetState<S>
) => Promise<void>;
