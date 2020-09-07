import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducerpopular , reducertrend, singlereducer, reducercredit, reducervideo, reducertv, singletvreducer } from "./movie/reducer";
const rootreducer = combineReducers({
  trend: reducertrend,
  popular:reducerpopular,
  single:singlereducer,
  credit : reducercredit,
  video:reducervideo,
  TV : reducertv,
  singleTV : singletvreducer
});
export const store = createStore(rootreducer, applyMiddleware(thunk));
