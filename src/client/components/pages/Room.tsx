import React, { useState } from "react";
import styled from "@emotion/styled";
import Headder from "../parts/Headder";
import { TableDisplayData } from "../../../interfaces";
import Modal from "../parts/createTableModal";

type Props = {
  leaveRoom: (roomId: string) => void;
  roomId: string;
  tables: Array<TableDisplayData>;
  createTable: (tableName: string) => void;
  joinTable: (tableId: string) => void;
};

const Room = (props: Props) => {
  const [visibleForm, setVisibleForm] = useState(false);
  return (
    <Wrapper>
      <Headder
        pageBack={() => {
          props.leaveRoom(props.roomId);
        }}
        title={"Room"}
      />
      <TableList>
        {props.tables &&
          props.tables.map((ele, index) => {
            return (
              <TableNode
                onClick={() => {
                  props.joinTable(ele.tableId);
                }}
                key={index}
              >
                {ele.tableName}
              </TableNode>
            );
          })}
      </TableList>
      <Button
        onClick={() => {
          setVisibleForm(true);
        }}
      >
        {"make table"}
      </Button>
      {visibleForm && (
        <Modal
          clickCancel={() => {
            setVisibleForm(false);
          }}
          onSubmit={roomName => {
            props.createTable(roomName);
          }}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  color: "blue",
});
const Title = styled("div")({});
const TableList = styled("div")({});
const TableNode = styled("div")({});
const Button = styled("button")({});

export default Room;
