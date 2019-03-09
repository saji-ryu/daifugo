import React from "react";
import styled from "@emotion/styled";
import { Socket } from "../../interfaces";

type Props = {
  socket: Socket;
  toRoot: () => void;
};

const Home = (props: Props) => (
  <Wrapper>
    <Title>{"home"}</Title>
    <Button onClick={props.toRoot}>{"Select Rooms"}</Button>
  </Wrapper>
);

const Wrapper = styled("div")({
  color: "red",
});

const Title = styled("div")({});
const Button = styled("button")({});

export default Home;
