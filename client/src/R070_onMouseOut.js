import React, { Component } from 'react';

class R070_onMouseOut extends Component {
    MouseOut(tag) {
        console.log('Tag : ' + tag);
    }

    render() {
        return (
            <>
                <div onMouseOut={e => this.MouseOut("div")}>
                    <h3>Div onMouseOut</h3>
                </div>
                <input type="text" onMouseOut={e => this.MouseOut("input")}/>
                <select onMouseOut={e => this.MouseOut("select")}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </>
        )
    }
}

export default R070_onMouseOut;