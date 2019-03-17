import { ThunkAction, ReduxState } from "../interfaces";
import axios, { AxiosResponse } from "axios";
import { SessionInfo } from "../../interfaces";
import { toHome, toTop } from "../modules/navigation";
import { setUserInfo, removeUserInfo, changePage } from "../modules/user";

const login = (): ThunkAction<ReduxState> => async (
  dispatch,
  getState
): Promise<void> => {
  const res: AxiosResponse<SessionInfo> = await axios.get(
    "http://127.0.0.1:3001/session"
  );
  if (res.data.auth) {
    await dispatch(
      setUserInfo({ userName: res.data.userName, userId: res.data.userId })
    );
    if (getState().user.currentPage === "Top") {
      await dispatch(changePage("Home"));
    }
  } else {
    await dispatch(removeUserInfo());
    await dispatch(changePage("Top"));
  }
};

export default login;
