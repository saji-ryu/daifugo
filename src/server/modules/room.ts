import { RoomData } from "../../interfaces";
import _debug from "debug";
const debug = _debug("module:room");
export default class Room {
  room: RoomData;
  constructor() {
    this.room = {};
  }

  makeRoom() {}
}
