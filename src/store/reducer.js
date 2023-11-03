export default function reducer(state, action) {
  switch (action.type) {
    case "theme/set":
      return {
        ...state,
        theme: action.payload,
      };
  }
  return state;
}
