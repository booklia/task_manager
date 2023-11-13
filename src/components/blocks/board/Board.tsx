import React from "react";
import { Text } from "../../ui-kit/text/StyledText";
import Column from "../../elements/column/Column";
import styled from "styled-components";

const Board = () => {
  return (
    <StyledSection>
      <StyledHeader>
        <Text tagName="h2" texttype="projectName">
          Project1
        </Text>
        <button>опции</button>
      </StyledHeader>
      <StyledBoard>
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
      </StyledBoard>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  width: calc(100% - 225px);
  flex-direction: column;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #e2e2e2;
`;
const StyledBoard = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 10px;
  overflow: scroll;
`;

export default Board;
