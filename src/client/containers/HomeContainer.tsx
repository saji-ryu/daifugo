import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Home } from "../components/pages";
import { ReduxState } from "../interfaces";
import { toSpace } from "../modules/navigation";

const mapStateToProps = (state: ReduxState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toRoot: () => {
      dispatch(toSpace());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
