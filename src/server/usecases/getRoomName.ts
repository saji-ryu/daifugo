import { roomData, tableData } from "../Memory";

const getRoomName = (roomId: string) => {
  return roomData[roomId].roomName;
};

export default getRoomName;
