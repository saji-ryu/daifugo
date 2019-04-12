import { userData } from "../Memory";
import emitter from "../utils/eventEmitter";
import { ArgTypes } from "../../interfaces";

const changePage = ({ currentPage, userId }: ArgTypes) => {
  if (userData[userId]) {
    userData[userId].currentPage = currentPage;
    emitter.emit("user.update.current_page", userId);
  }
};

export default changePage;
