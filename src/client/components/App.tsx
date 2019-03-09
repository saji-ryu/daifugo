import React, { useEffect } from "react";
import { Top, Home, Root } from "../containers";
import io from "socket.io-client";

type Props = {
  currentPageName: string;
};
const App = (props: Props) => {
  const socket = io.connect(location.origin);
  console.log(props);
  switch (props.currentPageName) {
    case "Top":
      return <Top />;

    case "Home":
      return <Home socket={socket} />;

    case "Root":
      return <Root socket={socket} />;

    default:
      return null;
  }
};

export default App;
