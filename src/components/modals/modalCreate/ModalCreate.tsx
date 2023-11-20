import React from "react";
import { Text } from "../../ui-kit/text/StyledText";
import { StyledModal } from "../modalStyles/ModalStyles";
import styled, { css } from "styled-components";
import { Cross } from "../../../static/icons";
import { Button } from "../../ui-kit/button/StyledButton";

const createTypes = {
  PROJECT: "project",
  COLUMN: "column",
  TASK: "task",
} as const;

const createFunctions = {
  [createTypes.TASK]: () => (
    <>
      <div>
        <StyledLabel>
          <Text tagName="h3" texttype="taskName">
            Name
          </Text>
          <StyledInput tagName="input" type="text" />
        </StyledLabel>
      </div>
      <div>
        <StyledLabel>
          <Text tagName="h3" texttype="taskName">
            Description
          </Text>
          <StyledInput tagName="textarea" type="text" />
        </StyledLabel>
      </div>
      <StyledSubtasks>
        <Text tagName="h3" texttype="taskName">
          Subtasks
        </Text>
        <div>
          <StyledInput tagName="input" />
          <StyledCross>
            <Cross />
          </StyledCross>
        </div>
        <div>
          <StyledInput tagName="input" />
          <StyledCross>
            <Cross />
          </StyledCross>
        </div>
        <Button buttontype="modal">+</Button>
      </StyledSubtasks>
      <div>
        <StyledLabel>
          <Text tagName="h3" texttype="taskName">
            Status
          </Text>
          <StyledSelect>
            <option>asdf</option>
          </StyledSelect>
        </StyledLabel>
      </div>
    </>
  ),
  [createTypes.COLUMN]: () => (
    <>
      <div>
        <StyledLabel>
          <Text tagName="h3" texttype="taskName">
            Name
          </Text>
          <StyledInput tagName="input" type="text" />
        </StyledLabel>
      </div>
      <div>
        <StyledLabel>
          <Text tagName="h3" texttype="taskName">
            Color
          </Text>
          <StyledInput tagName="input" type="color" />
        </StyledLabel>
      </div>
      <StyledSubtasks>
        <Text tagName="h3" texttype="taskName">
          Subtasks
        </Text>
        <div>
          <StyledInput tagName="input" />
          <StyledCross>
            <Cross />
          </StyledCross>
        </div>
        <div>
          <StyledInput tagName="input" />
          <StyledCross>
            <Cross />
          </StyledCross>
        </div>
        <StyledSelect>
          <option>asdf</option>
        </StyledSelect>
      </StyledSubtasks>
    </>
  ),
  [createTypes.PROJECT]: () => (
    <>
      <div>
        <StyledLabel>
          <Text tagName="h3" texttype="taskName">
            Name
          </Text>
          <StyledInput tagName="input" type="text" />
        </StyledLabel>
      </div>
      <StyledSubtasks>
        <Text tagName="h3" texttype="taskName">
          Columns
        </Text>
        <StyledColumn>
          <StyledInput tagName="input" />
          <StyledColorInput type="color" />
          <StyledNonAbsoluteCross>
            <Cross />
          </StyledNonAbsoluteCross>
        </StyledColumn>
        <Button buttontype="modal">+</Button>
      </StyledSubtasks>
    </>
  ),
};

const ModalCreate = () => {
  return (
    <StyledModal type="modal" className="modal__create">
      <StyledCross>
        <Cross />
      </StyledCross>

      <Text tagName="h2" texttype="modalHead">
        Create column {}
      </Text>
      {/*{createFunctions.task()}*/}
      {createFunctions.column()}
      {/*{createFunctions.project()}*/}

      <Button buttontype="delete">Сохранить</Button>
    </StyledModal>
  );
};

const StyledColumn = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledColorInput = styled.input`
  border-radius: 7px;
  height: 40px;
  width: 45px;
  &::-webkit-color-swatch {
    border-radius: 50%;
  }
`;

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

const Input = ({
  tagName,
  ...rest
}: {
  tagName: string;
} & { [k: string]: any }) => {
  const Tag = tagName;
  return <Tag {...rest}></Tag>;
};

const StyledSubtasks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content-items: center;
  gap: 10px;
`;

const StyledInput = styled(Input)`
  border: 1px solid #999;
  width: 100%;
  padding: 10px;
  border-radius: 7px;
  ${({ type }) =>
    type === "color"
      ? "height: 40px;padding: 3px;&::-webkit-color-swatch {\n    border-radius: 5px;\n  }"
      : null}

  &:active,
  &:focus {
    outline: none;
    border-color: #333333;
  }
`;

const StyledCross = styled.span`
  position: absolute;
  right: 20px;
  cursor: pointer;
  ${"svg"} {
    fill: #333;
  }
`;
const StyledNonAbsoluteCross = styled.span`
  cursor: pointer;
  ${"svg"} {
    fill: #333;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default ModalCreate;
