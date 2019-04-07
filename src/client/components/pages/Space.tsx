import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { RoomData } from "../../../interfaces";
import Headder from "../parts/Headder";
import Modal from "../parts/createRoomModal";

type Props = {
  pageBack: () => void;
  rooms: Array<RoomData>;
  createRoom: (roomName: string, isPrivate: boolean) => void;
  joinRoom: (roomId: string) => void;
};

const Space = (props: Props) => {
  const [visibleForm, setVisibleForm] = useState(false);
  return (
    <Wrapper>
      <Headder pageBack={props.pageBack} title={"Space"} />
      <RoomList>
        {props.rooms &&
          props.rooms.map((ele, index) => {
            return (
              <RoomNode
                onClick={() => {
                  props.joinRoom(ele.roomId);
                }}
                key={index}
              >
                {ele.roomName}
              </RoomNode>
            );
          })}
      </RoomList>
      <Button
        onClick={() => {
          setVisibleForm(true);
        }}
      >
        {"make room"}
      </Button>
      {visibleForm && (
        <Modal
          clickCancel={() => {
            setVisibleForm(false);
          }}
          onSubmit={(roomName, isPrivate) => {
            props.createRoom(roomName, isPrivate);
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
const RoomList = styled("div")({});
const RoomNode = styled("div")({});
const Button = styled("button")({});

export default Space;
