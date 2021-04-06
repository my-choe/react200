import React, { Component } from 'react';
const axios = require('axios');

/**
 * axios를 사용해 post방식으로 node api(/users)를 호출한다.
 */
class R111_ApiPostJson extends Component {
    componentDidMount(){
        axios.post('/users', {
        })
        .then( response => {
            console.log("response.data.message : " + response.data.message )
        })
    }

    render() {
        return (
            <>
            <h1>Call Node Api Post</h1>
            </>
        )
    }
}

export default R111_ApiPostJson;