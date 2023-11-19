import React from "react";
import { Button } from "../../ui-kit/button/StyledButton";
import styled from "styled-components";

const REMOVE_TYPE = {
  PROJECT: "project",
  COLUMN: "column",
  TASK: "task",
};

type Props = {
  type: typeof REMOVE_TYPE[keyof typeof REMOVE_TYPE];
  removeId: string;
};

const ModalRemove = ({ type, removeId }: Props) => {
  return (
    <StyledModal>
      <StyledH>Удаление {type}</StyledH>
      <StyledP>Вы уверены, что хотите удалить {removeId}?</StyledP>
      <StyledDiv>
        <Button buttontype={"modal delete"}>Да</Button>
        <Button buttontype={"modal delete-cancel"}>Нет</Button>
      </StyledDiv>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  width: 350px;
  background-color: red;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15% auto;
`;

const StyledH = styled.h3`
  color: #fff;
`;
const StyledP = styled.p`
  color: #fff;
`;
const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export default ModalRemove;
