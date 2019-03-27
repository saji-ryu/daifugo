import React from "react";
import styled from "@emotion/styled";

type Props = {
  toSpace: () => void;
};

const Home = (props: Props) => (
  <Wrapper>
    <Title>{"home"}</Title>
    <Button onClick={props.toSpace}>{"Select Rooms"}</Button>
  </Wrapper>
);

const Wrapper = styled("div")({
  color: "red",
});

const Title = styled("div")({});
const Button = styled("button")({});

export default Home;
