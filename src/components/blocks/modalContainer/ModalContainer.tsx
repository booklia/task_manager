import React from "react";
import ModalCreate from "../../modals/modalCreate/ModalCreate";
import ModalEdit from "../../modals/modalEdit/ModalEdit";
import styled from "styled-components";
import ModalRemove from "../../modals/modalRemove/ModalRemove";
import ModalTask from "../../modals/modalTask/ModalTask";
import { useSelector } from "react-redux";
import { Store } from "../../../store/data";
const ModalContainer = () => {
  const modalState = useSelector((state: Store) => state.modal);
  return (
    <StyledModalContainer>
      {/*{modalState.operation === "CREATE" && (*/}
      {/*  <ModalCreate type={modalState.type} removeId={modalState.elementId} />*/}
      {/*)}*/}
      {/*{modalState.operation === "EDIT" && (*/}
      {/*  <ModalEdit type={modalState.type} removeId={modalState.elementId} />*/}
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
  cursor: pointer;
  z-index: 1;
`;

export default ModalContainer;
