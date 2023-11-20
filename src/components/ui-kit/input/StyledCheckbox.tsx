import { Text } from "../text/StyledText";
import { Options } from "../../../static/icons";
import React from "react";
import styled from "styled-components";

type Props = {
  action: "none" | "edit" | "create";
  subtaskId: string;
  subtaskStatus: boolean;
  subtaskText: string;
  onDelete: (payload: { subtaskId: string }) => void;
  onEdit: (payload: {
    subtaskId: string;
    text: string;
    status: boolean;
  }) => void;
  onCreate: (payload: {
    subtaskId: string;
    text: string;
    status: boolean;
  }) => void;
};
// TODO: logic :)

const StyledCheckbox = () => {
  return (
    <StyledCheckboxContainer>
      <StyledLabel className="modal--subtask" htmlFor="id">
        <input type="checkbox" id="id" name="id" />
        <span className="checkbox-icon">
          <span className="checkmark"></span>
        </span>
        <Text tagName="p" texttype="modalText">
          Subtasks (number of number)
        </Text>
      </StyledLabel>
      <StyledOptions>
        <Options />
      </StyledOptions>
    </StyledCheckboxContainer>
  );
};

const StyledOptions = styled.span`
  cursor: pointer;
  margin-left: auto;
  ${"svg"} {
    height: 25px;
  }
`;

const StyledCheckboxContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  border-radius: 10px;
  background-color: #e2e2e2;
`;
const StyledLabel = styled.label`
  display: flex;
  gap: 10px;
  padding: 10px;
  align-items: center;
  width: 100%;

  ${Text} {
    width: 100%;
  }
  ${"input[type=checkbox]"} {
    display: none;
  }
  ${".checkbox-icon"} {
    height: 17px;
    width: 17px;
    background-color: #fff;
    border-radius: 3px;
    position: relative;
  }
  ${".checkmark"} {
    position: absolute;
    left: 5px;
    top: 2px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  ${"input[type=checkbox]:checked ~ .checkbox-icon"} {
    background-color: #7859cf;
  }
`;

export default StyledCheckbox;
