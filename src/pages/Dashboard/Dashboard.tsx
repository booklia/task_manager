import React from "react";
import Menu from "../../components/blocks/menu/Menu";
import Board from "../../components/blocks/board/Board";
import ModalContainer from "../../components/blocks/modalContainer/ModalContainer";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Menu />
      <Board />
      <ModalContainer />
    </div>
  );
};

export default Dashboard;
