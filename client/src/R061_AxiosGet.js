import React, { Component } from 'react';
import axios from 'axios';

/**
 * aixos는 fetch와 달리, 별도 설치 후 import하여 사용..
 * [npm install --save axios]
 */

class R061_AxiosGet extends Component {
    componentDidMount(){
        axios.get('http://data.jsontest.com/')
        .then( response => {alert(response.data.date)})
    }

    render() {
        return (
            <h1>AxiosGet</h1>
        )
    }
}

export default R061_AxiosGet;