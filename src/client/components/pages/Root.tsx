import React from "react";
import styled from "@emotion/styled";
import { Socket } from "../../interfaces";

type Props = {
  socket: Socket;
  rooms: Array<string>;
};

const Root = (props: Props) => (
  <Wrapper>
    <Title>{"Root"}</Title>
    <RoomList>
      {props.rooms &&
        props.rooms.map(ele => {
          return <RoomNode>{ele}</RoomNode>;
        })}
    </RoomList>
    <Button>{"make room"}</Button>
  </Wrapper>
);

const Wrapper = styled("div")({
  color: "blue",
});
const Title = styled("div")({});
const RoomList = styled("div")({});
const RoomNode = styled("div")({});
const Button = styled("button")({});

export default Root;
