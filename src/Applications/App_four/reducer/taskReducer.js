const iniData = {
  toDo: [],
};

function taskReducer(state = iniData, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        toDo: [...state.toDo, action.payload],
      };
    case 'DELETE_ITEM': return {
      ...state,
      // toDo: state.toDo.splice(action.payload, 1)
      toDo: state.toDo.filter(el => el != action.payload)
    }
    case 'UPDATE_ITEM': return {
      ...state,
      toDo: state.toDo.map((el) => {
        if (el === action.payload.oldItem) {
          return el = action.payload.newItem;
        }
        return el;
      })
    }
  }
  return state;
}

export default taskReducer;
