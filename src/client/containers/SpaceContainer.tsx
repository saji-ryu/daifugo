import { connect } from "react-redux";
import { Space } from "../components/pages";
import { ReduxState, ThunkDispatch } from "../interfaces";
import { createRoom } from "../usecases";
import { Socket } from "../interfaces";

const mapStateToProps = (state: ReduxState) => {
  return {
    rooms: state.space.rooms,
  };
};

function mapDispatchToProps(dispatch: ThunkDispatch) {
  return {
    createRoom: () => {
      dispatch(createRoom());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Space);
