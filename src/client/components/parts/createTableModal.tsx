import React, { useState } from "react";
import styled from "@emotion/styled";

type Props = {
  clickCancel: () => void;
  onSubmit: (tableName: string) => void;
};

const Component = (props: Props) => {
  const [tableName, setTableName] = useState("");
  return (
    <Wrapper>
      <FormArea>
        <div>
          <div>{"テーブルの名前を入力してください"}</div>
          <input
            type={"text"}
            onChange={ele => {
              setTableName(ele.target.value);
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              tableName && tableName.length > 1 && props.onSubmit(tableName);
            }}
          >
            {"テーブル作成"}
          </button>
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
