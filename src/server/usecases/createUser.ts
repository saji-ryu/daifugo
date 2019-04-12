import { userData } from "../Memory";
import { ArgTypes } from "../../interfaces";

const createUser = ({ userName, userId }: ArgTypes) => {
  const searchResult = Object.entries(userData).find(ele => {
    return ele[1].userName === userName;
  });
  if (searchResult) {
    return;
  }
  userData[userId] = {
    userName,
    userId,
    currentPage: "Top",
    roomId: null,
    tableId: null,
    matchId: null,
  };
};

export default createUser;
