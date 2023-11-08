import React from "react";
import ModalCreate from "../../modals/modalCreate/ModalCreate";
import ModalEdit from "../../modals/modalEdit/ModalEdit";
import ModalRemove from "../../modals/modalRemove/ModalRemove";

const ModalContainer = () => {
  return (
    <div className="modal modal-container">
      <ModalCreate />
      <ModalEdit />
      <ModalRemove />
    </div>
  );
};

export default ModalContainer;
