import produce from "immer";

//동적으로 reducer를 생성하는 함수
// 일치하는 action.type이 있을 경우
//그 액션을 실행하고 immer 패키지의 produce 함수를 이용해 불변객체로 리턴한다.
export default function createReducer(initialState, handleMap) {
  return function (state = initialState, action) {
    return produce(state, (draft) => {
      const handler = handleMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}
