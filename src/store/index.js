import { createStore } from 'redux';

const initalState = {
  clickedButton: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'BUTTON_CLICKED': {
      const newState = { ...state };
      newState.clickedButton = !newState.clickedButton;
      return newState;
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
