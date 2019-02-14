import React from "react";
import { SignInButton } from "../parts";
import styled from "@emotion/styled";

type Props = {};

const Top = (props: Props) => (
  <Wrapper>
    <Title>{"Top"}</Title>
    <SignInButton />
  </Wrapper>
);

const Wrapper = styled("div")({});
const Title = styled("div")({});

export default Top;
