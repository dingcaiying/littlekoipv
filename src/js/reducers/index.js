const initialState = {
  progress: -1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PROGRESS': {
      return {
        ...state,
        progress: action.data,
      };
    }
    default:
      return state;
  }
};
