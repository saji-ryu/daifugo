import React from "react";
import styled from "@emotion/styled";

type Props = {
  clickCancel: () => void;
};

const Component = (props: Props) => {
  return (
    <Wrapper>
      <FormArea>
        <div>
          <div>{"Roomの名前を入力してください"}</div>
          <input type={"text"} />
        </div>
        <div>
          <div>{"公開設定をしてください"}</div>
          <div>
            <input type={"radio"} name={"isPrivate"} />
            {"Public"}
          </div>
          <div>
            <input type={"radio"} name={"isPrivate"} />
            {"Private"}
          </div>
        </div>
        <div>
          <button>{"ルーム作成"}</button>
          <button onClick={props.clickCancel}>{"キャンセル"}</button>
        </div>
      </FormArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
`;

const FormArea = styled.div`
  width: 80vw;
  height: 20vh;
  background-color: rgb(255, 255, 255);
`;
export default Component;
