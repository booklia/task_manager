import React from "react";

const ModalTask = () => {
  return (
    <div className="modal-task">
      <h2 className="modal--header">asdf</h2>
      <p className="modal--description"></p>
      <div className="modal--subtasks">
        <h3>Subtasks (number of number)</h3>
        <label className="modal--subtask">
          <input type="checkbox" />
          <span className="checkbox-icon"></span>
          subtask text
        </label>
      </div>
      <div className="status">
        <h3 className="status--text">Status</h3>
        <select>
          <option></option>
        </select>
      </div>
    </div>
  );
};
export default ModalTask;
