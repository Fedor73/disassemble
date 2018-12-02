const initialState = {
  error: null,
  isLoaded: false,
  items: []
};

export function countriReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      };
    case "SET_IS_READY":
      return {
        ...state,
        isLoaded: action.payload
      };
    default:
      return state;
  }
}
