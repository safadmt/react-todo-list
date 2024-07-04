const InitailState = {
  topic: "",
  showAddTodo: true,
  showEditTodo: false,
  topics: [],
  editindex : null
};

function reducers(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        topics: [...state.topics, action.payload],
      };
      break;
    case "edit":
      const updatedItems = [...state.topics];
      updatedItems[state.editindex] = action.payload
      return { ...state, topics: updatedItems };
      break;
    case "show_edit_input":
      return {
        ...state,
        showEditTodo: true,
        showAddTodo : false,
        editindex : action.payload
      };
      break;
    case "hide_edit_input":
      return {
        ...state,
        showEditTodo: false,
        showAddTodo : true
      };
      break;
    case "delete":
      return {
        ...state,
        topics: state.topics.filter(
          (_, index) => index !== action.payload
        ),
      };
      break;
      case "cancel_edit":
        return {
          ...state,
          showEditTodo: false,
        showAddTodo : true,
        };
        break;
    default:
        return state;
      break;
  }
}

export { reducers, InitailState };
