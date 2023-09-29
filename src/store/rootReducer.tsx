import { combineReducers } from "redux";
import messagesSlice from "./messagesSlice";

export const rootReducer = combineReducers({
  // add reducers here
  messages: messagesSlice.reducer,
});
