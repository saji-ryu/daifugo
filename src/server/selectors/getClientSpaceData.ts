import { roomData } from "../Memory";
import { ClientSpaceData, RoomDisplayData } from "../../interfaces";

const selector = (): ClientSpaceData => {
  const roomsDisplayData: RoomDisplayData[] = Object.entries(roomData).map(
    ele => {
      const { isPrivate, roomName, roomId } = ele[1];
      return { isPrivate, roomName, roomId };
    }
  );
  return { rooms: roomsDisplayData };
};

export default selector;
