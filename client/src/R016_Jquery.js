import React, { Component } from 'react';
import $ from 'jquery';

class R016_Jquery extends Component {

    input_alert = (e) => {
        var input_val = $('#inputId').val();
        alert(input_val);
    }

    render() {
        return (
            <div>
                <h2>[ THIS IS Jquery ]</h2>
                <input id="inputId" name="inputName"/>
                <button id="buttonId" onClick={e => this.input_alert(e)}>Jquery Button</button>
            </div>
        )
    }
}

export default R016_Jquery;