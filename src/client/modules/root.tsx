export type State = {
  rooms: Array<string> | null;
};

type Action = {
  type: "daifugo/root/SET_ROOMS_INFO";
  data: Array<string>;
};

// action types
const SET_ROOMS_INFO = "daifugo/root/SET_ROOMS_INFO";

// initial state
const initialState: State = {
  rooms: null,
};

// reducer
const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SET_ROOMS_INFO:
      return Object.assign({}, state, { rooms: action.data });
    default:
      return state;
  }
};

// actions
export const setRoomsInfo = (data: Array<string>): Action => ({
  type: SET_ROOMS_INFO,
  data,
});
export default reducer;
