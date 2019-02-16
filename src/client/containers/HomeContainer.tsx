import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Home } from "../components/pages";
import { ReduxState } from "../interfaces";
import { toHome } from "../modules/navigation";

const mapStateToProps = (state: ReduxState) => {
  return {};
};

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
