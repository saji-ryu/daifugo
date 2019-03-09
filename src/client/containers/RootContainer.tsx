import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Root } from "../components/pages";
import { ReduxState } from "../interfaces";

const mapStateToProps = (state: ReduxState) => {
  return {
    rooms: state.root.rooms,
  };
};

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
