import { v4 as uuidv4 } from "uuid";
import { roomData, userData } from "../Memory";
import emitter from "../utils/eventEmitter";
import { ArgTypes } from "../../interfaces";

const createRoom = ({ roomName, isPrivate, ownerId }: ArgTypes) => {
  const searchResult = Object.entries(roomData).find(ele => {
    return ele[1].roomName === roomName;
  });
  if (searchResult) {
    return;
  }
  const secretKey = isPrivate
    ? String(Math.random()).substring(2, 6)
    : undefined;
  const newRoomId = `r${uuidv4()}`;
  roomData[newRoomId] = {
    roomId: newRoomId,
    isPrivate,
    secretKey,
    roomName,
    users: [ownerId],
    tables: [],
  };
  userData[ownerId].roomId = newRoomId;
  emitter.emit("space.update.room_created");
  emitter.emit("room.update.room_created", newRoomId);
  emitter.emit("user.update.rooom_created", ownerId);
};

export default createRoom;
