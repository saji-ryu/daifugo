import React from "react";
import { SignInButton } from "../parts";
import styled from "@emotion/styled";

type Props = {
  toHome: () => void;
};

const Top = ({ toHome }: Props) => (
  <Wrapper>
    <Title>{"Top"}</Title>
    <SignInButton toHome={toHome} />
  </Wrapper>
);

const Wrapper = styled("div")({});
const Title = styled("div")({});

export default Top;
