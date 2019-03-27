import React from "react";
import styled from "@emotion/styled";

type Props = {
  pageBack: () => void;
  title: string;
};

const Headder = (props: Props) => (
  <Wrapper>
    <div onClick={props.pageBack}>{"back"}</div>
    <div>{props.title}</div>
    <div>{}</div>
  </Wrapper>
);

const Wrapper = styled.div`
  height: 5vh;
  display: flex;
  background-color: pink;
  justify-content: space-between;
`;

export default Headder;
