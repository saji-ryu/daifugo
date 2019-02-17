import React from "react";
import styled from "@emotion/styled";

const SignInButton = () => (
  <Wrapper>
    <button
      onClick={() => {
        window.location.href = "http://127.0.0.1:3001/auth/twitter";
      }}
    >
      {"to home"}
    </button>
  </Wrapper>
);

const Wrapper = styled.div``;

export default SignInButton;
