import { css } from "styled-components";

const COLOR = {
  BACKGROUND_MAIN: "#7859CF",
  TEXT_MAIN: "#FFFFFF",
  BACKGROUND_MODAL: "#FFFFFF",
  TEXT_MODAL: "#7859CF",
  HOVER_COLOR: "#9070EC",
  ACTIVE_COLOR: "#593CAC",
  DISABLED_COLOR: "#BDBDBD",
  TEXT_CONDITION_COLOR: "#FFFFFF",
  TEXT_DELETE: "#333333",
};

const ButtonType = {
  MAIN: "main",
  MODAL: "modal",
  MENU: "menu",
  DELETE: "delete",
  DELETE_CANCEL: "delete-cancel",
} as const;

const ButtonStyle = {
  [ButtonType.MAIN]: css`
    background-color: ${COLOR.BACKGROUND_MAIN};
    color: ${COLOR.TEXT_MAIN};
  `,
  [ButtonType.MODAL]: css`
    width: 100%;
    background-color: ${COLOR.BACKGROUND_MODAL};
    color: ${COLOR.TEXT_MODAL};
    padding: 6px;
    border-radius: 10px;
    font-size: 24px;
    border: 1px solid ${COLOR.TEXT_MODAL};
  `,
  [ButtonType.MENU]: css`
    background-color: ${COLOR.BACKGROUND_MAIN};
    color: ${COLOR.TEXT_MAIN};
    border-radius: 0 20px 20px 0;
  `,
  [ButtonType.DELETE]: css`
    color: ${COLOR.TEXT_DELETE};
    width: 100%;
    background-color: ${COLOR.BACKGROUND_MODAL};
  `,
  [ButtonType.DELETE_CANCEL]: css`
    color: ${COLOR.TEXT_DELETE};
    width: 100%;

    background-color: ${COLOR.DISABLED_COLOR};
  `,
};

export { COLOR, ButtonType, ButtonStyle };
