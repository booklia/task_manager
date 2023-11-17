import React from "react";
import styled from "styled-components";
import { Text } from "../../ui-kit/text/StyledText";
import { Button } from "../../ui-kit/button/StyledButton";
import { useSelector, useDispatch } from "react-redux";
import { switchProject } from "../../../reducers/currentProjectReducer";
import { Store } from "../../../store/data";

const Menu = () => {
  const ids = useSelector((state: Store) =>
    Object.keys(state.projects).map((el) => [el, state.projects[el].name])
  );
  const currentProject = useSelector((state: Store) => state.currentProject);
  const dispatch = useDispatch();
  console.log(ids, currentProject);
  return (
    <StyledSection>
      <StyledLogo>
        <Text tagName="h1" texttype="projectName">
          Доска
        </Text>
      </StyledLogo>
      <StyledProjects>
        {ids.map((el) => (
          <Button
            key={el[0]}
            buttontype={`menu${el[0] === currentProject ? " active" : ""}`}
            onClick={() => dispatch(switchProject(el[0]))}
          >
            {el[1]}
          </Button>
        ))}
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
