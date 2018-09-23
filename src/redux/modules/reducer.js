// actions

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET_COLOR = "SET_COLOR";


// action creators

const increment = () => ({
  type: INCREMENT
});

const decrement = () => ({
  type: DECREMENT
});

const setColor = color => ({
  type: SET_COLOR,
  color
});

// initialState

const initialState = {
  number: 0,
  color: "black"
};

// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return applyIncrement(state, action);
    case DECREMENT:
      return applyDecrement(state, action);
    case SET_COLOR:
      return applySetColor(state, action);
    default:
      return state;
  }
};

// reducer functions

const applyIncrement = (state, actioin) => {
  return {
    ...state,
    number: state.number + 1
  };
};

const applyDecrement = (state, actioin) => {
  return {
    ...state,
    number: state.number - 1
  };
};

const applySetColor = (state, actioin) => {
  return {
    ...state,
    color: "red"
  };
};

// export ac

const actionCreators = {
  increment,
  decrement,
  setColor
};

export { actionCreators };

// export

export default reducer;
