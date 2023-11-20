import React from "react";
import ModalCreate from "../modalCreate/ModalCreate";
import ModalEdit from "../modalEdit/ModalEdit";
import styled from "styled-components";
import ModalRemove from "../modalRemove/ModalRemove";
import ModalTask from "../modalTask/ModalTask";
import { useSelector } from "react-redux";
import { Store } from "../../../data/store/data";
const ModalContainer = () => {
  const modalState = useSelector((state: Store) => state.modal);
  return (
    <StyledModalContainer>
      {/*{modalState.operation === "CREATE" && (*/}
      {/*  <ModalCreate type={modalState.type} removeId={modalState.elementId} />*/}
      {/*)}*/}
      {/*{modalState.operation === "EDIT" && (*/}
      <ModalEdit type={modalState.type} removeId={modalState.elementId} />
      {/*)}*/}
      {/*{modalState.operation === "DELETE" && (*/}
      {/*<ModalRemove type={modalState.type} removeId={modalState.elementId} />*/}
      {/*)}*/}
      {/*{modalState.operation === "VIEW" && (*/}
      {/*<ModalTask type={modalState.type} removeId={modalState.elementId} />*/}
      {/*)}*/}
    </StyledModalContainer>
  );
};

const StyledModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export default ModalContainer;
