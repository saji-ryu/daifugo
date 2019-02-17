import { ThunkAction, ReduxState } from "../interfaces";
import axios, { AxiosResponse } from "axios";
import { SessionInfo } from "../../interfaces";
import { toHome, toTop } from "../modules/navigation";
import { setUserInfo, removeUserInfo } from "../modules/user";

const login = (): ThunkAction<ReduxState> => async (dispatch, getState): Promise<void> => {
  const res: AxiosResponse<SessionInfo> = await axios.get("http://127.0.0.1:3001/session");
  if (res.data.auth) {
    await dispatch(setUserInfo({ name: res.data.userName, id: res.data.userId }));
    await dispatch(toHome());
  } else {
    await dispatch(removeUserInfo());
    await dispatch(toTop());
  }
};

export default login;
