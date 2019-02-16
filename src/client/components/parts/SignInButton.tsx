import React from "react";
import styled from "@emotion/styled";

type Props = {
  toHome: () => void;
};

const SignInButton = ({ toHome }: Props) => (
  <Wrapper>
    <button onClick={toHome}>{"to home"}</button>
  </Wrapper>
);

const Wrapper = styled.div``;

export default SignInButton;
