// Redux
import { State as NavigationState } from "../modules/navigation";
export type ReduxState = {
  navigation: NavigationState;
};

import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
export type ThunkDispatch = ThunkDispatch<ReduxState, {}, Action>;

import { Dispatch } from "redux";
export type GetState<S> = () => S;
export type ThunkAction<S> = (dispatch: Dispatch, getState: GetState<S>) => Promise<void>;
