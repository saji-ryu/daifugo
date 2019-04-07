import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Headder from "../parts/Headder";

type Props = {
  leaveRoom: (roomId: string) => void;
  roomId: string;
};

const Space = (props: Props) => {
  return (
    <Wrapper>
      <Headder
        pageBack={() => {
          props.leaveRoom(props.roomId);
        }}
        title={"Room"}
      />
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  color: "blue",
});
const Title = styled("div")({});

export default Space;
