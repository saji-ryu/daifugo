import { connect } from "react-redux";
import { Space } from "../components/pages";
import { ReduxState, ThunkDispatch } from "../interfaces";
import { createRoom, joinRoom } from "../usecases";
import { changePage } from "../modules/user";

const mapStateToProps = (state: ReduxState) => {
  return {
    rooms: state.space.rooms,
  };
};

function mapDispatchToProps(dispatch: ThunkDispatch) {
  return {
    pageBack: () => {
      dispatch(changePage("Home"));
    },
    createRoom: (roomName: string, isPrivate: boolean) => {
      dispatch(createRoom(roomName, isPrivate));
    },
    joinRoom: (roomId: string) => {
      console.log(roomId);
      dispatch(joinRoom(roomId));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Space);
