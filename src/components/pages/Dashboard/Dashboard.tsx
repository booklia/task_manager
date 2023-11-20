import React from "react";
import Menu from "../../blocks/menu/Menu";
import Board from "../../blocks/board/Board";
import styled from "styled-components";
import ModalContainer from "../../modals/modalContainer/ModalContainer";

const Dashboard = () => {
  return (
    <StyledDashboard>
      <Menu />
      <Board />
      <ModalContainer />
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  display: flex;
  width: 100vw;
`;

export default Dashboard;
