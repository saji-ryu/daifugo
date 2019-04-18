import { connect } from "react-redux";
import { Room } from "../components/pages";
import { ReduxState, ThunkDispatch } from "../interfaces";
import { leaveRoom, createTable, joinTable } from "../usecases";

const mapStateToProps = (state: ReduxState) => {
  return {
    roomId: state.user.roomId,
    tables: state.room.tables,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch) => {
  return {
    leaveRoom: (roomId: string) => {
      dispatch(leaveRoom(roomId));
    },
    createTable: (tableName: string) => {
      dispatch(createTable(tableName));
    },
    joinTable: (tableId: string) => {
      dispatch(joinTable(tableId));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);
