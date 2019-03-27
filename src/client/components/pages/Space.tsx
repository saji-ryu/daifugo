import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { RoomData } from "../../../interfaces";
import Headder from "../parts/Headder";

type Props = {
  pageBack: () => void;
  rooms: Array<RoomData>;
  createRoom: () => void;
};

const Space = (props: Props) => {
  return (
    <Wrapper>
      <Headder pageBack={props.pageBack} title={"Space"} />
      <RoomList>
        {props.rooms &&
          props.rooms.map((ele, index) => {
            return <RoomNode key={index}>{ele.roomName}</RoomNode>;
          })}
      </RoomList>
      <Button
        onClick={() => {
          props.createRoom();
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
