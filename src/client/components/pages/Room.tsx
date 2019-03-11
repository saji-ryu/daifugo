import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Socket } from "../../interfaces";

type Props = {};

const Space = (props: Props) => {
  return (
    <Wrapper>
      <Title>{"Room"}</Title>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  color: "blue",
});
const Title = styled("div")({});

export default Space;
