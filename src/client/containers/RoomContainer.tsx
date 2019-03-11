import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Room } from "../components/pages";
import { ReduxState } from "../interfaces";

const mapStateToProps = (state: ReduxState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);
