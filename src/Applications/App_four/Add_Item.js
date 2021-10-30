import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
function Add_item() {
  const [textTodo, setTextTodo] = useState("");
  const taskData = useSelector((store) => store);
  const dispatch = useDispatch();
  let addTask = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TASK", payload: textTodo });
    console.log(taskData.toDo);
  };
  return (
    <>
      <h2 className="task_number">number of tasks: {taskData.toDo.length} </h2>
      <div className="form">
        <form action="">
          <label htmlFor="todo">Add To Do...</label>
          <input
            name="todo"
            value={textTodo}
            onChange={(e) => {
              setTextTodo(e.target.value);
            }}
            type="text"
            maxLength={30}
          />
          <button onClick={addTask}>Add</button>
        </form>
      </div>
    </>
  );
}

export default Add_item;
