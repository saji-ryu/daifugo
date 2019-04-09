import { Store } from "redux";
import { setUserInfo } from "./modules/user";
import { setSpaceInfo } from "./modules/space";
import { setRoomInfo } from "./modules/room";
import { setTableInfo } from "./modules/table";
import { Socket } from "./interfaces";
import { SpaceData, UserData, RoomData, TableData } from "../interfaces";

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
    this.socket.on("user.init", (userData: UserData) => {
      this.store.dispatch(setUserInfo(userData));
    });
    this.socket.on("space.init", (spaceData: SpaceData) => {
      this.store.dispatch(setSpaceInfo(spaceData));
    });
    this.socket.on("room.init", (roomData: RoomData) => {
      this.store.dispatch(setRoomInfo(roomData));
    });
    this.socket.on("table.update", (tableData: TableData) => {
      this.store.dispatch(setTableInfo(tableData));
    });
    this.socket.on("room.update", (roomData: RoomData) => {
      this.store.dispatch(setRoomInfo(roomData));
    });
    this.socket.on("space.update", (spaceData: SpaceData) => {
      this.store.dispatch(setSpaceInfo(spaceData));
    });
    this.socket.on("user.update", (userData: UserData) => {
      this.store.dispatch(setUserInfo(userData));
    });
  }
}
