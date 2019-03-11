import { connect } from "react-redux";
import { Top } from "../components/pages";
import { ReduxState, ThunkDispatch } from "../interfaces";
import login from "../usecases/login";

const mapStateToProps = (state: ReduxState) => {
  return {};
};

const mapDispatchToProps = (dispatch: ThunkDispatch) => {
  return {
    login: () => {
      dispatch(login());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
