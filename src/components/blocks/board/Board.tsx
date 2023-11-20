import React from "react";
import { Text } from "../../ui-kit/text/StyledText";
import Column from "../../elements/column/Column";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Store } from "../../../data/store/data";

const Board = () => {
  const currentProject = useSelector(
    (state: Store) => state.projects[state.currentProject]
  );
  return (
    <StyledSection>
      <StyledHeader>
        <Text tagName="h2" texttype="projectName">
          {currentProject.name}
        </Text>
        <button>опции</button>
      </StyledHeader>
      <StyledBoard>
        {Object.keys(currentProject.columns).map((el) => (
          <Column key={el} columnData={currentProject.columns[el]} />
        ))}
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
