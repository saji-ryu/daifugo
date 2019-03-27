import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Room } from "../components/pages";
import { ReduxState } from "../interfaces";
import { changePage } from "../modules/user";

const mapStateToProps = (state: ReduxState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    pageBack: () => {
      dispatch(changePage("Space"));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);
