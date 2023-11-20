import React from "react";
import { StyledModal } from "../modalStyles/ModalStyles";
import StyledCheckbox from "../../ui-kit/input/StyledCheckbox";
import styled from "styled-components";
import { Text } from "../../ui-kit/text/StyledText";
import { Cross } from "../../../static/icons";
import { Task } from "../../../data/store/data";
import { Button } from "../../ui-kit/button/StyledButton";

type Props = {
  onClose: () => void;
  task: Task;
  status: string[];
};
// TODO: logic :)

const ModalTask = () => {
  return (
    <StyledModal type="modal">
      <StyledCross>
        <Cross />
      </StyledCross>
      <Text tagName="h2" texttype="modalHead">
        asdf
      </Text>
      <Text tagName="p" texttype="modalText">
        vcxbcvbs
      </Text>
      <StyledCheckboxes className="modal--subtasks">
        <Text tagName="h3" texttype="inputHead">
          Subtasks (number of number)
        </Text>
        <StyledCheckbox />
        <Button buttontype="modal">+</Button>
      </StyledCheckboxes>
      <div className="status">
        <Text tagName="h3" texttype="inputHead">
          Status
        </Text>
        <StyledSelect>
          <option>asdf</option>
        </StyledSelect>
      </div>
    </StyledModal>
  );
};

const StyledSelect = styled.select`
  padding: 7px;
  border: 1px solid #333;
  width: 100%;
  border-radius: 10px;
  margin-top: 10px;
  &:focus {
    outline: none;
    border-color: #7859cf;
  }
`;

const StyledCross = styled.span`
  position: absolute;
  right: 20px;
  cursor: pointer;
`;

const StyledCheckboxes = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export default ModalTask;
