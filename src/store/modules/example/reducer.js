const initalState = {
  clickedButton: false,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case 'BUTTON_CLICKED': {
      const newState = { ...state };
      newState.clickedButton = !newState.clickedButton;
      return newState;
    }
    default:
      return state;
  }
}
