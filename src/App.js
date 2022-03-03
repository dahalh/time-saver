import "./App.css";
import React, { useState } from "react";
import { Title } from "./components/Title.js";
import { Form } from "./components/Form.js";
import { GoodList } from "./components/GoodList.js";
import { BadList } from "./components/BadList.js";
import { TotalHours } from "./components/TotalHours";

function App() {
  // creating an array for goodList and setGoodList function
  const [goodList, setGoodList] = useState([]);
  const [badList, setBadList] = useState([]);

  // add new tasks in array
  const addNewTask = (task) => {
    setGoodList([...goodList, task]);
  };

  // delete a task from the good list
  const handleOnDeleteGoodList = (i) => {
    console.log(i);
    if (window.confirm("Are you sure you want to delete this?")) {
      const newArg = goodList.filter((item, index) => index !== i);
      setGoodList(newArg);
    }
  };

  // take item from goodList and put it in badList
  const markAsBad = (i) => {
    const selectedItem = goodList[i];
    setBadList([...badList, selectedItem]);
    const newArg = badList.filter((item, index) => index !== i);
    setGoodList(newArg);
  };
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <Title />
          {/* passing addNewTask to form */}
          <Form addNewTask={addNewTask} />
          <div className="row">
            {/* passing goodList, handleOnDeleteGoodList,markAsBad to GoodList */}
            <GoodList
              goodList={goodList}
              handleOnDeleteGoodList={handleOnDeleteGoodList}
              markAsBad={markAsBad}
            />
            <BadList badList={badList} />
          </div>
          <TotalHours />
        </div>
      </div>
    </div>
  );
}

export default App;
