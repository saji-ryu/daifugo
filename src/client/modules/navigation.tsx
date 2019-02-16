export type State = {
  currentPage: PageName;
  previousPage: PageName;
};

type Action = {
  type: "daifugo/navigation/TO_HOME" | "daifugo/navigation/TO_TOP";
};

type PageName = "Top" | "Home";

// action types
const TO_HOME = "daifugo/navigation/TO_HOME";
const TO_TOP = "daifugo/navigation/TO_TOP";

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

export default reducer;
