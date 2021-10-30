import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'

function Items() {
    const dataArr = useSelector(store => store)
    // console.log(dataArr.toDo);
    let dataList = dataArr.toDo.map((element, index) => {
        // console.log(element, ' this is element');
        return <Item element={element} key={index} index={index} />;

    })
    return (
      <div className="margin-up">
        {dataList}
      </div>
    );
}

export default Items
