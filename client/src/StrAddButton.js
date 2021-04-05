import React, { Component } from 'react';
import { connect } from 'react-redux';
import {add} from './actions';
/**
 * connect 함수의 두 번째 파라미터 mapDispatchToProps 함수로,
 * dispatch 함수를 컴포넌트 함수에 바인딩할 수 있다.
 * 즉, 컴포넌트 함수가 실행되면 바인딩 된 dispatch 함수가 실행된다.
 */
class StrAddButton extends Component {
    render() {
        return (
            /* <input value="Add200" type="button" onClick={this.addString}/> */
            <input value='Add200' type="button" onClick={this.props.addString} />
        )
    }

    // line26에서 두 함수를 바인딩 했기 때문에 별도 함수 선언은 불필요하다.
   /*  addString = () => {
        this.props.store.dispatch(add());
    } */
}

let mapDispatchToProps = (dispatch, props) => {
    console.log('Props from App.js : ' + props.AppProp)
    return {
        addString: () => dispatch(add())
    };
};

StrAddButton = connect(null, mapDispatchToProps)(StrAddButton);

export default StrAddButton;