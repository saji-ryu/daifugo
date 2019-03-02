import { userData } from "../Memory";

const createUser = ({ userName, userId }) => {
  const searchResult = Object.entries(userData).find(ele => {
    return ele[1].userName === userName;
  });
  if (searchResult) {
    return;
  }
  userData[userId] = {
    userName,
    userId,
    roomId: null,
    tableId: null,
    matchId: null,
  };
};

export default createUser;
