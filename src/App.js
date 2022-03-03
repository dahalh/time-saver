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

  // delete a task from the bad list
  const handleOnDeleteBadList = (i) => {
    console.log(i);
    if (window.confirm("Are you sure you want to delete this?")) {
      const newArg = badList.filter((item, index) => index !== i);
      setBadList(newArg);
    }
  };

  // take item from goodList and put it in badList
  const markAsBad = (i) => {
    const selectedItem = goodList[i];
    setBadList([...badList, selectedItem]);

    const newArg = goodList.filter((item, index) => index !== i);
    setGoodList(newArg);
  };

  // take item from badList and put it in goodList
  const markAsGood = (i) => {
    const selectedItem = badList[i];
    setGoodList([...goodList, selectedItem]);

    const newArg = badList.filter((item, index) => index !== i);
    setBadList(newArg);
  };

  const ttlBadHours = badList.reduce((acc, curr) => acc + curr.hr, 0);
  const ttlGoodHours = badList.reduce((subttl, item) => subttl + item.hr, 0);
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
            <BadList
              badList={badList}
              markAsGood={markAsGood}
              handleOnDeleteBadList={handleOnDeleteBadList}
              ttlBadHours={ttlBadHours}
            />
          </div>
          <TotalHours total={ttlBadHours + ttlGoodHours} />
        </div>
      </div>
    </div>
  );
}

export default App;
