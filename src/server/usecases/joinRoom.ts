import { roomData, userData } from "../Memory";

const joinRoom = ({ roomId, userId }) => {
  userData[userId].roomId = roomId;
  roomData[roomId].users.push(userId);
};

export default joinRoom;
