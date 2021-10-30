import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'

function Items() {
    const dataArr = useSelector(store => store)
    let dataList = dataArr.toDo.map((element, index) => {
        return <Item element={element} index={index} />;
        // return (
        //   <div key={index} className="items">
        //     <div className="text">
        //       <h3>{element}</h3>
        //       <div className="update">
        //         <input type="text" />
        //         <button>update</button>
        //       </div>
        //     </div>
        //     <div className="btns">
        //       <button>Edit</button>
        //       <button>Delete</button>
        //     </div>
        //   </div>
        // );
    })
    return (
      <div className="margin-up">
        {dataList}
        {/* <div className="items">
                <div className="text">
                    <h3>to do text....</h3>
                    <div className="update">
                        <input type="text" />
                        <button>update</button>
                    </div>
                </div>
                <div className="btns">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div className="items">
                <div className="text">
                    <h3>to do text....</h3>
                    <div className="update">
                        <input type="text" />
                        <button>update</button>
                    </div>
                </div>
                <div className="btns">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div className="items">
                <div className="text">
                    <h3>to do text....</h3>
                    <div className="update">
                        <input type="text" />
                        <button>update</button>
                    </div>
                </div>
                <div className="btns">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div> */}
      </div>
    );
}

export default Items
