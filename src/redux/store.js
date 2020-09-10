import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducerpopular , reducertrend, singlereducer, reducercredit, reducervideo, reducertv, singletvreducer, reducercredittv } from "./movie/reducer";
const rootreducer = combineReducers({
  trend: reducertrend,
  popular:reducerpopular,
  single:singlereducer,
  credit : reducercredit,
  video:reducervideo,
  TV : reducertv,
  singleTV : singletvreducer,
  creditTV : reducercredittv
});
export const store = createStore(rootreducer, applyMiddleware(thunk));
