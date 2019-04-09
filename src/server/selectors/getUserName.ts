import { userData } from "../Memory";

const getUserName = (userId: string) => {
  if (userData[userId]) {
    return userData[userId].userName;
  }
};

export default getUserName;
