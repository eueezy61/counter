// actions

const CREATE = "CREATE";
const REMOVE = "REMOVE";

// action creators

const create = () => ({
  type: CREATE
});

const remove = () => ({
  type: REMOVE
});

// initialState

const initialState = {
  containers: [
    {
      number: 0,
      color: 'black'
    }
  ]
};

// reducer

const list = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return applyCreate(state, actioin);
    case REMOVE:
      return applyRemove(state, actioin);
    default:
      return state;
  }
};

// reducer functions

// export ac

const actionCreators = {
  create,
  remove
};

export { actionCreators };

// export

export default list;
