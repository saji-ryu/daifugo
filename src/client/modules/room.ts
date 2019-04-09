import { RoomData } from "../../interfaces";

export type State = RoomData | {};

type AddUserData = {
  userId: string;
  roomId: string;
};

type CreateTableData = {
  tableName: string;
  ownerId: string;
  roomId: string;
};

type RemoveUserData = AddUserData;

export type Action =
  | {
      type: "daifugo/room/SET_ROOM_INFO";
      data: RoomData;
    }
  | {
      type: "daifugo/room/REMOVE_USER_FROM_ROOM";
      data: RemoveUserData;
    }
  | {
      type: "daifugo/room/ADD_USER_TO_ROOM";
      data: AddUserData;
    }
  | { type: "daifugo/room/CREATE_TABLE"; data: CreateTableData };

// action types
const SET_ROOM_INFO = "daifugo/room/SET_ROOM_INFO";
const REMOVE_USER_FROM_ROOM = "daifugo/room/REMOVE_USER_FROM_ROOM";
const ADD_USER_TO_ROOM = "daifugo/room/ADD_USER_TO_ROOM";
const CREATE_TABLE = "daifugo/room/CREATE_TABLE";

// initial state
const initialState: State = {};

// reducer
const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SET_ROOM_INFO:
      return Object.assign({}, state, action.data);
    case REMOVE_USER_FROM_ROOM:
      return {};
    default:
      return state;
  }
};

// actions
export const setRoomInfo = (data: RoomData): Action => ({
  type: SET_ROOM_INFO,
  data,
});
export const removeUserFromRoom = (data: RemoveUserData): Action => ({
  type: REMOVE_USER_FROM_ROOM,
  data,
});
export const addUserToRoom = (data: AddUserData): Action => ({
  type: ADD_USER_TO_ROOM,
  data,
});
export const createTable = (data: CreateTableData): Action => ({
  type: CREATE_TABLE,
  data,
});

export default reducer;
