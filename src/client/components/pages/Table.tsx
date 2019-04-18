import React from "react";
import styled from "@emotion/styled";
import Headder from "../parts/Headder";
import { UserDisplayData } from "../../../interfaces";

type Props = {
  leaveTable: (tableId: string) => void;
  tableId: string;
  users: UserDisplayData[];
};

const Table = (props: Props) => {
  return (
    <Wrapper>
      <Headder
        pageBack={() => {
          props.leaveTable(props.tableId);
        }}
        title={"Table"}
      />
      <UserList>
        {props.users &&
          props.users.map((ele, index) => {
            return <UserNode key={index}>{ele.userName}</UserNode>;
          })}
      </UserList>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  color: "blue",
});
const Title = styled("div")({});
const UserList = styled("div")({});
const UserNode = styled("div")({});

export default Table;
