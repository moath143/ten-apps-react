import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Item({ element, index }) {
  // console.log(element, 'element from item file');
    const [displayItem, setDisplayItem] = useState('none')
    const[updateText, setUpdateText] = useState('')
    const dispatch = useDispatch()
    let editItem = (e) => {
        e.preventDefault()
        setDisplayItem('block')
    }

    let cancelItem = (e) => {
        e.preventDefault()
        setDisplayItem('none')
    }
    let deleteItem = (element) => {
        dispatch({type: 'DELETE_ITEM', payload: element})
    }
    let updateItem = (element) => {
      // element.preventDefault();
      console.log(element);
      console.log(updateText);
      dispatch({
        type: "UPDATE_ITEM",
        payload: { oldItem: element, newItem: updateText },
      });
      setDisplayItem("none");
    };
  return (
    <>
      <div key={index} className="items">
        <p className="number">{index + 1}</p>
        <div className="text">
          <h3>{element}</h3>
          <div style={{ display: displayItem }} className="update">
            <input type="text" value={updateText} onChange={(e) => {setUpdateText(e.target.value)}} />
            <button onClick={() => {updateItem(element)}}>update</button>
            <button onClick={cancelItem}>cancel</button>
          </div>
        </div>
        <div className="btns">
          <button onClick={editItem}>Edit</button>
          <button onClick={() => {deleteItem(element)}}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default Item;
