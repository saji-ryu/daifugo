import { roomData, userData } from "../Memory";

const leaveRoom = ({ roomId, userId }) => {
  userData[userId].roomId = null;
  roomData[roomId].users = roomData[roomId].users.filter(ele => ele !== userId);
};

export default leaveRoom;
