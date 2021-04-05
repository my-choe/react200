import React, { Component } from 'react';

class R014_ForEach extends Component {

    componentDidMount() {
        var For_Arr = [3, 2, 8, 8];
        var For_newArr = [];

        for(var i = 0; i < For_Arr.length; i++){
            For_newArr.push(For_Arr[i]);
        }
        console.log("1. For_newArr : [" + For_newArr + "]");

        var ForEach_Arr = [3, 3, 9 , 8];
        var ForEach_newArr = [];
        ForEach_Arr.forEach((result) => {
            ForEach_newArr.push(result);
            // 반복문이 실행될 때마다 콜백 함수로 결괏값(result)을 받아 새로운 함수(ForEach_newArr)에 넣는다.
        })
        console.log("2. ForEach_newArr : [" + ForEach_newArr + "]");
    }

    render() {
        return (
            <h2>[ THIS IS ForEach ]</h2>
        )
    }
}

export default R014_ForEach;