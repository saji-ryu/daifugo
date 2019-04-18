import { ClientTableData } from "../../interfaces";

export type State = ClientTableData | {};

type AddUserData = {
  userId: string;
  tableId: string;
};

type RemoveUserData = AddUserData;

export type Action =
  | {
      type: "daifugo/table/SET_TABLE_INFO";
      data: ClientTableData;
    }
  | {
      type: "daifugo/table/REMOVE_USER_FROM_TABLE";
      data: RemoveUserData;
    }
  | {
      type: "daifugo/table/ADD_USER_TO_TABLE";
      data: AddUserData;
    };

// action types
const SET_TABLE_INFO = "daifugo/table/SET_TABLE_INFO";
const REMOVE_USER_FROM_TABLE = "daifugo/table/REMOVE_USER_FROM_TABLE";
const ADD_USER_TO_TABLE = "daifugo/table/ADD_USER_TO_TABLE";

// initial state
const initialState: State = {};

// reducer
const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SET_TABLE_INFO:
      return Object.assign({}, state, action.data);
    case REMOVE_USER_FROM_TABLE:
      return {};
    default:
      return state;
  }
};

// actions
export const setTableInfo = (data: ClientTableData): Action => ({
  type: SET_TABLE_INFO,
  data,
});
export const removeUserFromTable = (data: RemoveUserData): Action => ({
  type: REMOVE_USER_FROM_TABLE,
  data,
});
export const addUserToTable = (data: AddUserData): Action => ({
  type: ADD_USER_TO_TABLE,
  data,
});

export default reducer;
