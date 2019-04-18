import { ClientMatchData } from "../../interfaces";

export type State = ClientMatchData | {};

export type Action =
  | {
      type: "daifugo/match/SET_MATCH_INFO";
      data: ClientMatchData;
    }
  | {
      type: "daifugo/match/REMOVE_MATCH_INFO";
    };

// action types
const SET_MATCH_INFO = "daifugo/match/SET_MATCH_INFO";
const REMOVE_MATCH_INFO = "daifugo/match/REMOVE_MATCH_INFO";

// initial state
const initialState: State = {};

// reducer
const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SET_MATCH_INFO:
      return Object.assign({}, state, action.data);
    case REMOVE_MATCH_INFO:
      return {};
    default:
      return state;
  }
};

// actions
export const setMatchInfo = (data: ClientMatchData): Action => ({
  type: SET_MATCH_INFO,
  data,
});

export default reducer;
