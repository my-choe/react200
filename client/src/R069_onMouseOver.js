import React, { Component } from 'react';

class R069_onMouseOver extends Component {
    MouseOver(tag) {
        console.log('Tag : ' + tag);
    }

    render() {
        return (
            <>
                <div onMouseOver={e => this.MouseOver("div")}>
                    <h3>Div onMouseOver</h3>
                </div>
                <input type="text" onMouseOver={e => this.MouseOver("input")}/>
                <select onMouseOver={e => this.MouseOver("select")}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </>
        )
    }
}

export default R069_onMouseOver;