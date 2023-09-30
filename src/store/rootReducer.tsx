import { combineReducers } from "redux";
import messagesSlice from "./messagesSlice";
import { messageApi } from "./services/messageService";

export const rootReducer = combineReducers({
  // add reducers here
  messages: messagesSlice.reducer,
  [messageApi.reducerPath]: messageApi.reducer,
});
