import React, { Component } from 'react';

class R015_Map extends Component {
    // map()은 forEach()와 달리 return을 사용해 반환 값을 받을 수 있다.
    componentDidMount() {
        var Map_Arr = [3, 2, 8, 8];
        // Map_Arr 순서대로 하나씩 가져와 변수 x에 넣은 후 그대로 반환해(x => x) 순서대로 쌓아놓는다.
        // 마지막 요소까지 반복했다면, 한 번에 새로운 배열(Map_newArr)에 저장한다.
        let Map_newArr = Map_Arr.map(x => x);
        console.log("1. Map_newArr : [" + Map_newArr + "]");

        let Map_mulitiArr = Map_Arr.map(x => x * 2)
        console.log("2. Map_mulitiArr : [" + Map_mulitiArr + "]");

        var ObjArray = [{key:'react', value: '200'},
                        {key: '리액트', value: 'TwoHundred'}];
        let Map_objArr = ObjArray.map((obj, index) => {
            console.log((index+3) + ". obj : " + JSON.stringify(obj))
            var Obj = {};
            Obj[obj.key] = obj.value;
            return Obj;
        });
        console.log("5. Map_objArr : " + JSON.stringify(Map_objArr));
    }

    render() {
        return (
            <h2>[ THIS IS Map ]</h2>
        )
    }
}
export default R015_Map;