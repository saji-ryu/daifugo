import React from "react";
import { Top, Home, Space, Room, Table } from "../containers";

type Props = {
  currentPageName: string;
};
const App = (props: Props) => {
  switch (props.currentPageName) {
    case "Top":
      return <Top />;
    case "Home":
      return <Home />;
    case "Space":
      return <Space />;
    case "Room":
      return <Room />;
    case "Table":
      return <Table />;

    default:
      return null;
  }
};

export default App;
