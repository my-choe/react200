import React, { Component } from 'react';
import axios from 'axios';

/** get방식과 다른 점은 post 함수 파라미터로 json과 같은 형태의 데이터를 넣고 http body에 담아 url을 호출할 수 있다. */

class R062_AxiosPost extends Component {
    componentDidMount() {
        axios.post('http://date.jsontest.com/', {
            a:"react", b: 200
        })
        .then( response => {alert(response.data.date)})
    }

    render() {
        return (
            <h1>axios post</h1>
        )
    }
}

export default R062_AxiosPost;