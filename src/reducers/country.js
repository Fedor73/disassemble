const initialState = {
  //   isReady: false,
  //   items: null,
  books: [
    {
      id: 1,
      title: 11111111
    },
    { id: 2, title: 2222222222 }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return {
        ...state,
        books: action.payload
        // items: action.payload,
        // isReady: true
      };
    default:
      return state;
  }
};
