import { connect } from "react-redux";
import { Space } from "../components/pages";
import { ReduxState, ThunkDispatch } from "../interfaces";
import { createRoom } from "../usecases";
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
    createRoom: () => {
      dispatch(createRoom());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Space);
