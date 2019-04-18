import { roomData } from "../Memory";
import { ArgTypes } from "../../interfaces";

const removeUserFromRoom = ({ roomId, userId }: ArgTypes) => {
  if (roomData[roomId]) {
    roomData[roomId].users = roomData[roomId].users.filter(
      ele => ele !== userId
    );
  }
};

export default removeUserFromRoom;
