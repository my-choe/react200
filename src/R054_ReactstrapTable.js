import React, { Component } from 'react';
import { Table } from 'reactstrap';

class R054_ReactstrapTable extends Component {
    render() {
        return (
            <Table>
                { /* 
                <Table dark bordered>
                <Table striped hover>
                <Tbale borderless size="sm">
                */}
                <thead>
                    <tr>
                        <th>number</th>
                        <th>Book Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>React 100</td>
                        <td>￦10,000</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>React 200</td>
                        <td>￦20,000</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default R054_ReactstrapTable;