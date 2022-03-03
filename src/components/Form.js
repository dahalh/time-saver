import React, { useState } from "react";

// setting format of how the new task is recieved when submitted
// it is recieved with task and hr id to differentiate which input came from which box
const initialState = { task: "", hr: "" };

// receiving addNewTask from Form
export const Form = ({ addNewTask }) => {
  const [newTask, setNewTask] = useState(initialState);

  // receive newTask and setNewTask in the intialState format
  const handleOnSubmit = (e) => {
    e.preventDefault();

    addNewTask(newTask);
    setNewTask(initialState);
  };

  // gathering value and name from the input box when input is typed
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setNewTask({
      ...newTask,
      [name]: name === "hr" ? +value : value,
    });
  };

  return (
    <div className="row">
      <div className="col">
        <div className="form-box py-5">
          <form
            // handleOnSubmit to gather data
            onSubmit={handleOnSubmit}
            className="row row-cols-md-auto d-flex justify-content-center g-3"
          >
            <div className="col-12">
              <label className="visually-hidden"></label>
              <div className="input-group">
                <input
                  type="text"
                  name="task"
                  // handleOnChange to get input from input box
                  onChange={handleOnChange}
                  value={newTask.task}
                  placeholder="Your Task"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="col-12">
              <label className="visually-hidden"></label>
              <div className="input-group">
                <input
                  type="text"
                  name="hr"
                  // handleOnChange to get input from input box
                  onChange={handleOnChange}
                  value={newTask.hr}
                  placeholder="Hours"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="col-12">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
