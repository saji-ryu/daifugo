import React from "react";
import styled from "@emotion/styled";

const SignInButton = () => (
  <Wrapper>
    <button
      onClick={() => {
        window.location.href = "./auth/twitter";
      }}
    >
      {"twitter login"}
    </button>
  </Wrapper>
);

const Wrapper = styled.div``;

export default SignInButton;
