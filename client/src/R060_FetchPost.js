import { render } from '@testing-library/react';
import React, { Component } from 'react';

/**
 * 사용방법은 get과 비슷하지만, 두 번째 파라미터에 post호출에 대한 정보가 추가된다.
 * 
 */
class R060_FetchPost extends Component {
    componentDidMount = async () => {
        const response = await fetch('http://data.jsontest.com/', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                // http통신을 할 때 header 부분에서 어떤 형태의 데이터를 사용할 지 지정한다.
                // 이때 Content-Type이라는 변수를 사용한다. json형태 데이터를 사용하기 위해 applictaion/json을 할당한다.
            },
            body: { a: "react", b:200},
        });

        const body = await response.json();
        alert(body.date);
    }

    render() {
        return (
            <h1>fetch post</h1>
        )
    }
}

export default R060_FetchPost;