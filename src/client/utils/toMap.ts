import { RoomData } from "../../interfaces";
export const roomDataToMap = (roomsData: { [key: string]: RoomData }) => {
  return Object.entries(roomsData).map(ele => {
    return ele[1];
  });
};
