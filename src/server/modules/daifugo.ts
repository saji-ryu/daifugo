import Room from "./room";
import _debug from "debug";
const debug = _debug("module:daifugo");

export default class Daifugo {
  // FIXME:型ゆるい
  rooms: any;
  constructor() {
    this.rooms = {};
  }
  room(roomName: string) {
    if (!this.room[roomName]) {
      debug(`${roomName} created`);
      this.rooms[roomName] = new Room();
    }
    return this.rooms[roomName];
  }
}
