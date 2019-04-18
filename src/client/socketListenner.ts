import { Store } from "redux";
import { setUserInfo } from "./modules/user";
import { setSpaceInfo } from "./modules/space";
import { setRoomInfo } from "./modules/room";
import { setTableInfo } from "./modules/table";
import { Socket } from "./interfaces";
import {
  ClientSpaceData,
  ClientUserData,
  ClientRoomData,
  ClientTableData,
} from "../interfaces";

export default class SocketListener {
  socket: Socket;
  store: Store;
  constructor(socket: Socket) {
    this.socket = socket;
  }
  init(store: Store) {
    this.store = store;
    this.socket.emit("");
  }

  listen() {
    this.socket.on("user.init", (userData: ClientUserData) => {
      this.store.dispatch(setUserInfo(userData));
    });
    this.socket.on("space.init", (spaceData: ClientSpaceData) => {
      this.store.dispatch(setSpaceInfo(spaceData));
    });
    this.socket.on("room.init", (roomData: ClientRoomData) => {
      this.store.dispatch(setRoomInfo(roomData));
    });
    this.socket.on("table.init", (tableData: ClientTableData) => {
      this.store.dispatch(setTableInfo(tableData));
    });
    this.socket.on("table.update", (tableData: ClientTableData) => {
      this.store.dispatch(setTableInfo(tableData));
    });
    this.socket.on("room.update", (roomData: ClientRoomData) => {
      this.store.dispatch(setRoomInfo(roomData));
    });
    this.socket.on("space.update", (spaceData: ClientSpaceData) => {
      this.store.dispatch(setSpaceInfo(spaceData));
    });
    this.socket.on("user.update", (userData: ClientUserData) => {
      this.store.dispatch(setUserInfo(userData));
    });
  }
}
