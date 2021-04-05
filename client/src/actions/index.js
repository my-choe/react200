/**
 * 컴포넌트에서 dispatch함수가 실행되면, 리듀서 함수는 액션 값을 참조해 작업을 실행한다.
 * 이때 액션값에 따라 조건을 분기할 수 있다.
 * StrAddButton 컴포넌트에서 add 함수를 실행하면 type변수에 ADD변숫값을 할당해 return 한다.
 */

 export const ADD = 'ADD';
 export const add = () => {
     return {
         type: ADD
     }
 };