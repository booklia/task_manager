import styled, { css } from "styled-components";
import { ButtonStyle, COLOR, ButtonType } from "./consts";

type Props = {
  buttontype: typeof ButtonType[keyof typeof ButtonType];
};

const StyledButton = styled.button<Props>`
  padding: 12px 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0;
  cursor: pointer;
  border-radius: 7px;
  ${({ buttontype }) => {
    return ButtonStyle[buttontype];
  }}
  &:hover {
    background-color: ${COLOR.HOVER_COLOR};
    color: ${COLOR.TEXT_CONDITION_COLOR};
  }
  &:active {
    background-color: ${COLOR.ACTIVE_COLOR};
    color: ${COLOR.TEXT_CONDITION_COLOR};
  }
  &:disabled {
    background-color: ${COLOR.DISABLED_COLOR};
    color: ${COLOR.TEXT_CONDITION_COLOR};
    cursor: not-allowed;
  }
`;

export { StyledButton as Button };
