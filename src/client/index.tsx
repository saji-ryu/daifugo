import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./Redux/store";
import SocketListenner from "./socketListenner";
import socket from "./utils/socket";

import App from "./containers/AppContainer";

const store = configureStore();
const socketListenner = new SocketListenner(socket);
socketListenner.init(store);
socketListenner.listen();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
