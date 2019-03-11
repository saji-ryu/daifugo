import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Socket } from "../../interfaces";
import { RoomData } from "../../../interfaces";

type Props = {
  socket: Socket;
  rooms: RoomData;
  createRoom: (socket: Socket) => void;
};

const Space = (props: Props) => {
  return (
    <Wrapper>
      <Title>{"Space"}</Title>
      <RoomList>
        {props.rooms &&
          Object.entries(props.rooms).map((ele, index) => {
            return <RoomNode key={index}>{ele[1].roomName}</RoomNode>;
          })}
      </RoomList>
      <Button
        onClick={() => {
          props.createRoom(props.socket);
        }}
      >
        {"make room"}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  color: "blue",
});
const Title = styled("div")({});
const RoomList = styled("div")({});
const RoomNode = styled("div")({});
const Button = styled("button")({});

export default Space;
