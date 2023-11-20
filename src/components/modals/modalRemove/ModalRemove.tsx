import React from "react";
import { Button } from "../../ui-kit/button/StyledButton";
import styled from "styled-components";
import { StyledModal } from "../modalStyles/ModalStyles";
import { Text } from "../../ui-kit/text/StyledText";
import { Cross } from "../../../static/icons";

const REMOVE_TYPE = {
  PROJECT: "project",
  COLUMN: "column",
  TASK: "task",
} as const;

type Props = {
  type: typeof REMOVE_TYPE[keyof typeof REMOVE_TYPE];
  removeId: string;
};

const ModalRemove = ({ type, removeId }: Props) => {
  return (
    <StyledModal type="modalRemove">
      <StyledCross>
        <Cross />
      </StyledCross>
      <Text tagName="h3" texttype="modalHead" color="TEXT_WHITE">
        Удаление {type}
      </Text>
      <Text tagName="p" texttype="modalText" color="TEXT_WHITE">
        Вы уверены, что хотите удалить {removeId}?
      </Text>
      <StyledDiv>
        <Button buttontype={"delete"}>Да</Button>
        <Button buttontype={"delete-cancel"}>Нет</Button>
      </StyledDiv>
    </StyledModal>
  );
};

const StyledCross = styled.span`
  position: absolute;
  right: 20px;
  cursor: pointer;
  ${"svg"} {
    fill: #fff;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export default ModalRemove;
