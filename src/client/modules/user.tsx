export type State = {
  name: string | null;
  id: string | null;
};

type Action = {
  type:
    | "daifugo/user/SET_USER_INFO"
    | "daifugo/user/REMOVE_USER_INFO"
    | "daifugo/user/UPDATE_TIMEOT";
  data?: { [key: string]: any };
};

// action types
const SET_USER_INFO = "daifugo/user/SET_USER_INFO";
const REMOVE_USER_INFO = "daifugo/user/REMOVE_USER_INFO";

// initial state
const initialState: State = { name: null, id: null };

// reducer
const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SET_USER_INFO:
      return Object.assign({}, state, {
        name: action.data.name,
        id: action.data.id,
      });
    case REMOVE_USER_INFO:
      return Object.assign({}, state, {
        name: null,
        id: null,
      });
    default:
      return state;
  }
};

// actions
export const setUserInfo = (data: State): Action => ({
  type: SET_USER_INFO,
  data,
});
export const removeUserInfo = (): Action => ({
  type: REMOVE_USER_INFO,
});

export default reducer;
