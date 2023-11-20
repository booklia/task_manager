import styled, { css } from "styled-components";

const MODAL_TYPES = {
  MODAL_REMOVE: "modalRemove",
  MODAL: "modal",
};

const MODAL_STYLES = {
  [MODAL_TYPES.MODAL_REMOVE]: css`
    width: 350px;
    background-color: red;
    color: #fff;
  `,
  [MODAL_TYPES.MODAL]: css`
    width: 550px;
    background-color: #fff;
  `,
};

export const StyledModal = styled.div<{ type: string }>`
  ${({ type }) => MODAL_STYLES[type]}
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15% auto;
  position: relative;
`;
