import { userData } from "../Memory";

const changePage = ({ currentPage, userId }) => {
  userData[userId].currentPage = currentPage;
};

export default changePage;
