import * as types from "../app/actionType";

const init = {
  todoData: [],
};


export const reducer = (state = init, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.TODO_REQUEST: {
      return { ...state, todoData: [] };
    }
    case types.TODO_SUCCESS: {
      // console.log(payload)
      return { ...state, todoData:payload };
      // return { ...state, todoData:[...state.todoData, payload] };
    }

    case types.TODO_FAILURE: {
      return { ...state, todoData: [] };
    }





    default:
      return state;
  }
};
