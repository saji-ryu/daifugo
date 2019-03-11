import React from "react";
import { Top, Home, Space, Room } from "../containers";
import socket from "../utils/socket";

type Props = {
  currentPageName: string;
};
const App = (props: Props) => {
  switch (props.currentPageName) {
    case "Top":
      return <Top />;

    case "Home":
      return <Home socket={socket} />;

    case "Space":
      return <Space socket={socket} />;
    case "Room":
      return <Room />;

    default:
      return null;
  }
};

export default App;
