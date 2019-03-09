export type State = {
  userName: string | null;
  userId: string | null;
  roomId: string | null;
  tableId: string | null;
  matchId: string | null;
};

type Action = {
  type:
    | "daifugo/user/SET_USER_INFO"
    | "daifugo/user/REMOVE_USER_INFO"
    | "daifugo/user/UPDATE_TIMEOUT";
  data?: { [K in keyof State]?: State[K] };
};

// action types
const SET_USER_INFO = "daifugo/user/SET_USER_INFO";
const REMOVE_USER_INFO = "daifugo/user/REMOVE_USER_INFO";

// initial state
const initialState: State = {
  userName: null,
  userId: null,
  roomId: null,
  tableId: null,
  matchId: null,
};

// reducer
const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SET_USER_INFO:
      return Object.assign({}, state, action.data);
    case REMOVE_USER_INFO:
      return Object.assign({}, state, {
        userName: null,
        userId: null,
        roomId: null,
        tableId: null,
        matchId: null,
      });
    default:
      return state;
  }
};

// actions
export const setUserInfo = (
  data: { [K in keyof State]?: State[K] }
): Action => ({
  type: SET_USER_INFO,
  data,
});
export const removeUserInfo = (): Action => ({
  type: REMOVE_USER_INFO,
});

export default reducer;
