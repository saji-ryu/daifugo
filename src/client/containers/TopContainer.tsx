import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Top } from "../components/pages";
import { ReduxState } from "../interfaces";
import { toHome } from "../modules/navigation";

const mapStateToProps = (state: ReduxState) => {
  return {};
};

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    toHome: () => {
      dispatch(toHome());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
