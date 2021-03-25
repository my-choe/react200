import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class R089_reactRouter extends Component {
    render() {
        return (
            <>
                <h1>path='/'</h1>
                <h3>R089_reactRouter</h3>
                <Link to={'/reactRouter2'}>reactRouter2</Link>
            </>
        )
    }
}

export default R089_reactRouter;