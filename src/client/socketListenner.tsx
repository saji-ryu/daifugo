import { Store } from "redux";
import socket from "./utils/socket";
import { setUserInfo } from "./modules/user";
import { setRoomsInfo } from "./modules/space";

const socketListenner = (store: Store) => {
  socket.on("user.init", userData => {
    store.dispatch(setUserInfo(userData));
  });
  socket.on("space.init", roomData => {
    store.dispatch(setRoomsInfo(roomData));
  });
  socket.on("space.update", roomData => {
    store.dispatch(setRoomsInfo(roomData));
  });
  socket.on("user.update", userData => {
    console.log(userData);
    store.dispatch(setUserInfo(userData));
  });
};

export default socketListenner;
