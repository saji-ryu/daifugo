import { RoomData } from "../../interfaces";
import { roomDataToMap } from "../utils/toMap";

export type State = {
  rooms: Array<RoomData>;
};

type ActionData = {
  [key: string]: RoomData;
};

type Action = {
  type: "daifugo/root/SET_ROOMS_INFO";
  data: ActionData;
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
      return Object.assign({}, state, { rooms: roomDataToMap(action.data) });
    default:
      return state;
  }
};

// actions
export const setRoomsInfo = (data: ActionData): Action => ({
  type: SET_ROOMS_INFO,
  data,
});
export default reducer;
