import { roomData } from "../Memory";

const removeUserFromRoom = ({ roomId, userId }) => {
  if (roomData[roomId]) {
    roomData[roomId].users = roomData[roomId].users.filter(
      ele => ele !== userId
    );
  }
};

export default removeUserFromRoom;
