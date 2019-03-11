export type State = {
  currentPage: PageName;
  previousPage: PageName;
};

type Action = {
  type:
    | "daifugo/navigation/TO_HOME"
    | "daifugo/navigation/TO_TOP"
    | "daifugo/navigation/TO_SPACE"
    | "daifugo/navigation/TO_ROOM";
};

type PageName = "Top" | "Home" | "Root" | "Space";

// action types
const TO_HOME = "daifugo/navigation/TO_HOME";
const TO_TOP = "daifugo/navigation/TO_TOP";
const TO_SPACE = "daifugo/navigation/TO_SPACE";
const TO_ROOM = "daifugo/navigation/TO_ROOM";

// initial state
const initialState: State = { currentPage: "Top", previousPage: "Top" };

// reducer
const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case TO_HOME:
      return Object.assign({}, state, {
        currentPage: "Home",
        previousPage: state.currentPage,
      });
    case TO_TOP:
      return Object.assign({}, state, {
        currentPage: "Top",
        previousPage: state.currentPage,
      });
    case TO_SPACE:
      return Object.assign({}, state, {
        currentPage: "Space",
        previousPage: state.currentPage,
      });
    case TO_ROOM:
      return Object.assign({}, state, {
        currentPage: "Room",
        previousPage: state.currentPage,
      });
    default:
      console.log("first");
      console.log(state);
      return state;
  }
};

// actions
export const toHome = (): Action => ({
  type: TO_HOME,
});
export const toTop = (): Action => ({
  type: TO_TOP,
});
export const toSpace = (): Action => ({
  type: TO_SPACE,
});
export const toRoom = (): Action => ({
  type: TO_ROOM,
});

export default reducer;
