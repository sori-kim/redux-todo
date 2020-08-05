import { applyMiddleware, createStore } from "redux";

import todoReducer from "../todo/state";

//redux의 combineReducer 메서드를 사용해 reducer를 추가하기 위해
//reducer에 초기화
const reducer = todoReducer;

const loggingMiddleware = (store) => (next) => (action) => {
  console.log("BEFORE_STATE");
  console.log(store.getState());
  const result = next(action);
  console.log("NEXT STATE : ");
  console.log(store.getState());
  return result;
};

//미들웨어 적용
const store = createStore(reducer, applyMiddleware(loggingMiddleware));
export default store;
