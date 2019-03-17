import { Store } from "redux";
import { setUserInfo } from "./modules/user";
import { setRoomsInfo } from "./modules/space";
import { Socket } from "./interfaces";

// const socketListenner = (store: Store) => {
//   socket.on("user.init", userData => {
//     store.dispatch(setUserInfo(userData));
//   });
//   socket.on("space.init", roomData => {
//     store.dispatch(setRoomsInfo(roomData));
//   });
//   socket.on("space.update", roomData => {
//     store.dispatch(setRoomsInfo(roomData));
//   });
//   socket.on("user.update", userData => {
//     console.log(userData);
//     store.dispatch(setUserInfo(userData));
//   });
// };

export default class SocketListener {
  socket: Socket;
  store: Store;
  constructor(socket: Socket) {
    this.socket = socket;
  }
  init(store: Store) {
    this.store = store;
  }

  listen() {
    this.socket.on("user.init", userData => {
      console.log("init");
      this.store.dispatch(setUserInfo(userData));
    });
    this.socket.on("space.init", roomData => {
      this.store.dispatch(setRoomsInfo(roomData));
    });
    this.socket.on("space.update", roomData => {
      this.store.dispatch(setRoomsInfo(roomData));
    });
    this.socket.on("user.update", userData => {
      this.store.dispatch(setUserInfo(userData));
    });
  }
}
