import { userData } from "../Memory";
import emitter from "../utils/eventEmitter";

const changePage = ({ currentPage, userId }) => {
  if (userData[userId]) {
    userData[userId].currentPage = currentPage;
    emitter.emit("user.update.current_page", userId);
  }
};

export default changePage;
