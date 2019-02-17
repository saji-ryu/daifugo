import React, { useEffect } from "react";
import { SignInButton } from "../parts";
import styled from "@emotion/styled";

type Props = {
  login: () => void;
};

const Top = ({ login }: Props) => {
  useEffect(() => {
    login();
  });
  return (
    <Wrapper>
      <Title>{"Top"}</Title>
      <SignInButton />
    </Wrapper>
  );
};

const Wrapper = styled("div")({});
const Title = styled("div")({});

export default Top;
