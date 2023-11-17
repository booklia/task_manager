import React from "react";
import ModalCreate from "../../modals/modalCreate/ModalCreate";
import ModalEdit from "../../modals/modalEdit/ModalEdit";
import ModalRemove from "../../modals/modalRemove/ModalRemove";
import { useSelector } from "react-redux";
import { Store } from "../../../store/data";
const ModalContainer = () => {
  const modalState = useSelector((state: Store) => state.modal);
  return (
    <div className="modal modal-container">
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
      {/*  <ModalView type={modalState.type} removeId={modalState.elementId} />*/}
      {/*)}*/}
    </div>
  );
};

export default ModalContainer;
