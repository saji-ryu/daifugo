import { connect } from "react-redux";
import { Room } from "../components/pages";
import { ReduxState, ThunkDispatch } from "../interfaces";
import { leaveRoom } from "../usecases";

const mapStateToProps = (state: ReduxState) => {
  return {
    roomId: state.user.roomId,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch) => {
  return {
    leaveRoom: (roomId: string) => {
      dispatch(leaveRoom(roomId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);
