type PageName = "Top" | "Home" | "Space" | "Room" | "Table" | "Match";
export type State = {
  userName: string | null;
  userId: string | null;
  currentPage: PageName;
  roomId: string | null;
  tableId: string | null;
  matchId: string | null;
};

type Action = {
  type:
    | "daifugo/user/SET_USER_INFO"
    | "daifugo/user/REMOVE_USER_INFO"
    | "daifugo/user/PAGE_CHANGE";
  data?: { [K in keyof State]?: State[K] };
};

// action types
const SET_USER_INFO = "daifugo/user/SET_USER_INFO";
const REMOVE_USER_INFO = "daifugo/user/REMOVE_USER_INFO";
const PAGE_CHANGE = "daifugo/user/PAGE_CHANGE";

// initial state
const initialState: State = {
  currentPage: "Top",
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
        currentPage: "Top",
        userName: null,
        userId: null,
        roomId: null,
        tableId: null,
        matchId: null,
      });
    case PAGE_CHANGE:
      return Object.assign({}, state, action.data);
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

export const changePage = (pageName: PageName): Action => ({
  type: PAGE_CHANGE,
  data: { currentPage: pageName },
});

export const removeUserInfo = (): Action => ({
  type: REMOVE_USER_INFO,
});

export default reducer;
