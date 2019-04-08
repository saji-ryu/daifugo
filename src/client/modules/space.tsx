import { SpaceData } from "../../interfaces";

export type State = SpaceData;

type CreateRoomData = {
  isPrivate: boolean;
  roomName: string;
  ownerId: string;
};

export type Action =
  | {
      type: "daifugo/space/CREATE_ROOM";
      data: CreateRoomData;
    }
  | {
      type: "daifugo/space/SET_SPACE_INFO";
      data: SpaceData;
    };

// action types
const SET_SPACE_INFO = "daifugo/space/SET_SPACE_INFO";
const CREATE_ROOM = "daifugo/space/CREATE_ROOM";

// initial state
const initialState: State = {
  rooms: null,
};

// reducer
const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SET_SPACE_INFO:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};

// actions
export const setSpaceInfo = (data: SpaceData): Action => ({
  type: SET_SPACE_INFO,
  data,
});

export const createRoom = (data: CreateRoomData): Action => ({
  type: CREATE_ROOM,
  data,
});

export default reducer;
