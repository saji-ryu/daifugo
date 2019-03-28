import { v4 as uuidv4 } from "uuid";
import { roomData, userData } from "../Memory";
import emitter from "../utils/eventEmitter";

const createRoom = ({ roomName, isPrivate, ownerId }) => {
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
  userData[ownerId].currentPage = "Room";
  emitter.emit("space.update.rooom_created");
  emitter.emit("user.update.roomdata", ownerId);
};

export default createRoom;
