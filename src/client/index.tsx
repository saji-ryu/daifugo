import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import socketListenner from "./socketListenner";

import App from "./containers/AppContainer";

export const store = configureStore();
socketListenner(store);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
