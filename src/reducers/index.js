import {ADD} from '../actions';
import {combineReducers} from 'redux';  // 리듀서를 스토어에 넘겨주기 위해 combineReducers함수 임포트

const initState = {
    str: 'react',   // 초깃값 선언 ,할당
};

const data = (state = initState, action) => {
    switch (action.type){   // add함수에서 반환된 type변숫값 ADD를 가져온다.
        case ADD:
            return state, { str: state.str + '200'};
        default:
            return state;
    }
};

/**
 * 리듀서 함수 data를 combineReducers 함수를 이용해 하나의 리듀싱 함수로 변환하고 export 한다.
 * 이 함수는 src의 index.js에 있는 createStore 함수의 파라미터로 넘겨진다.
 * 스토어 state값에 변경이 발생했기 때문에 subscribe함수가 동작해 화면이 렌더링된다.
 */
const App = combineReducers({
    data
});

export default App;