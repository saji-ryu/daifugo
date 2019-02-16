import React from "react";
import { Top, Home } from "../containers";

type Props = {
  currentPageName: string;
};
const App = (props: Props) => {
  console.log(props);
  switch (props.currentPageName) {
    case "Top":
      return <Top />;

    case "Home":
      return <Home />;

    default:
      return null;
  }
};

export default App;
