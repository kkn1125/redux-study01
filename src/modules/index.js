import counter from "./counter";
import { combineReducers } from "redux";
import todos from "./todos";

// combineReducers에 들어간 프로퍼티 명으로 useSelector에서 선택한다.
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
