import { combineReducers } from "redux";
import enquiries from "./enquiryReducer";
import courses from "./courseReducer";

let rootReducer = combineReducers({ enquiries, courses });

export default rootReducer;
