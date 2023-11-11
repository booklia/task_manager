import { css } from "styled-components";

const COLOR = {
  TEXT_MAIN: "#333333",
  TEXT_SUBHEADING: "#7859CF",
};

const TEXT_TYPE = {
  PROJECT_NAME: "projectName",
  MODAL_HEAD: "modalHead",
  COLUMN_NAME: "columnName",
  INPUT_HEAD: "inputHead",
  TASK_NAME: "taskName",
  SUBTASKS: "subtasks",
  MODAL_TEXT: "modalText",
};

const TextStyles = {
  [TEXT_TYPE.PROJECT_NAME]: css`
    font-size: 36px;
    line-height: 50px;
    letter-spacing: 0.02em;
    color: ${COLOR.TEXT_MAIN};
  `,
  [TEXT_TYPE.MODAL_HEAD]: css`
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 0.02em;
    color: #333333;
  `,
  [TEXT_TYPE.COLUMN_NAME]: css`
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #333333;
  `,
  [TEXT_TYPE.INPUT_HEAD]: css`
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0em;
    color: #333333;
  `,
  [TEXT_TYPE.TASK_NAME]: css`
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: #7859cf;
  `,
  [TEXT_TYPE.SUBTASKS]: css`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0em;
  `,
  [TEXT_TYPE.MODAL_TEXT]: css`
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0em;
  `,
};

export { COLOR, TEXT_TYPE, TextStyles };
