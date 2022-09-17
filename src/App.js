import React, { useState } from "react";
import Header from "./Header";
import "./styles.css";
const App = () => {
  const [task, setTask] = useState("");
  const [values, setValues] = useState([]);

  const deleteIcon = (
    <svg
      style={{ width: "20px", height: "20px", alignItems: "center" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" />
    </svg>
  );

  const funct = (e) => {
    e.preventDefault();
    const newValues = {
      id: new Date().getTime().toString(),
      task: task
    };
    setValues([...values, newValues]);
    console.log(values);
    setTask("");
  };
  const deleteItems = (index) => {
    console.log(index);
    const updateditems = values.filter((elem) => {
      return index !== elem.id;
    });
    setValues(updateditems);
  };
  return (
    <div className="App">
      <Header />
      <form action="" onSubmit={funct}>
        <div className="formstyle">
          <h2>Enter Task</h2>
          <br />
          <label htmlFor="task" style={{ color: "white" }}>
            Enter your task
          </label>
          <input
            style={{
              backgroundColor: "lightgray",
              border: "1px solid gray",
              gap: "10px",
              padding: "2px 8px"
            }}
            type="task"
            value={task}
            id="task"
            onChange={(e) => setTask(e.target.value)}
          />

          <button
            style={{
              color: "white",
              fontWeight: "bold",
              backgroundColor: "darkgray",
              border: "1px solid gray",
              gap: "10px",
              padding: "2px 8px"
            }}
            type="submit"
          >
            ADD
          </button>
        </div>
      </form>
      {values.map((curElem) => {
        return (
          <div className="lists">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                fontSize: "20px",
                color: "white",
                fontWeight: "bold",
                letterSpacing: "3px",
                backgroundColor: "lightpink",
                gap: "20px"
              }}
              key={curElem.id}
            >
              <p>{curElem.task}</p>
              <div
                className="deleteIconImg"
                onClick={() => deleteItems(curElem.id)}
              >
                {deleteIcon}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
