import { combineReducers } from "redux";
import authReducers from "./Auth";
export const rootReducer = combineReducers({
  auth: authReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
