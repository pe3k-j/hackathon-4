export default function reducer(state, action) {
  console.log("Incoming action: ", action);

  switch (action.type) {
    case "theme/set":
      return {
        ...state,
        theme: action.payload,
      };
  }

  return state;
}
