import React, { Component } from 'react';

class R007_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state){
        console.log('2. getDerivedStateFromProps Call : ' + props.prop_value);
        return { tmp_state:props.prop_value };
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    componentDidMount() {
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : ' + this.state.tmp_state);
    }

    render() {
        console.log('3. render Call');
        return (
            <h2>[ THIS IS COMPONENTDIDMOUNT FUNCTION ]</h2>
        )
    }
}

export default R007_LifecycleEx;