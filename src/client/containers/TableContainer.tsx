import { connect } from "react-redux";
import { Table } from "../components/pages";
import { ReduxState, ThunkDispatch } from "../interfaces";
import { leaveTable } from "../usecases";

const mapStateToProps = (state: ReduxState) => {
  return {
    tableId: state.user.tableId,
    users: state.table.users,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch) => {
  return {
    leaveTable: (tableId: string) => {
      dispatch(leaveTable(tableId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
