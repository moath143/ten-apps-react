import React from 'react'
import './App_four.css'
import Add_item from './Add_Item'
import Items from './Items'
import taskReducer from './reducer/taskReducer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

function App_four() {
    const store = createStore(taskReducer)
    return (
      <div>
        <Provider store={store}>
          <Add_item />
          <Items />
        </Provider>
      </div>
    );
}

export default App_four
