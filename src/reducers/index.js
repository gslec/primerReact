const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORITE':
      if (state.mylist.filter((element) => element.id === action.payload.id).length !== 0) {
        return state;
      }
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    default: return state;
  }
};

export default reducer;
