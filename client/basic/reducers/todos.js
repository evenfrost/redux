import { ADD_TODO, COMPLETE_TODO } from './../actions';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case COMPLETE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, completed: true };
        }

        return todo;
      });
    default:
      return state;
  }
}
