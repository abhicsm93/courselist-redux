export default function(state = {}, action) {
  switch (action.type) {
    case "GET_COURSES":
      return { ...state, course: action.payload };
    default:
      return state;
  }
}
