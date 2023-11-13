import React from "react";
import styled from "styled-components";
import { Text } from "../../ui-kit/text/StyledText";
import { Button } from "../../ui-kit/button/StyledButton";

const Menu = () => {
  return (
    <StyledSection>
      <StyledLogo>
        <Text tagName="h1" texttype="projectName">
          Доска
        </Text>
      </StyledLogo>
      <StyledProjects>
        <Button buttontype="menu">Project1</Button>
        <Button buttontype="menu">Project2</Button>
        <Button buttontype="menu">Project3</Button>
      </StyledProjects>
      <div className="menu__themes"></div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 225px;
  height: 100vh;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-right: 1px solid #e2e2e2;
`;

const StyledLogo = styled.div`
  margin-left: 5px;
`;
const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Menu;
