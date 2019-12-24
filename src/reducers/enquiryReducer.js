export default function(state = {}, action) {
  switch (action.type) {
    case "GET_ENQUIRIES":
      return { ...state, enquiry: action.payload };
    case "POST_ENQUIRIES":
      return { ...state, update: action.payload };
    default:
      return state;
  }
}
