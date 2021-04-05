import React, { Component } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import axios from "axios";

/**  ScatterChart는 X좌표와 Y좌표 데이터를 각각 할당해 두 좌표가 만나는 지점에 점을 표시할 수 있다. */
class floatingPopulationScatterChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseFPList: '',
            append_FPList: '',
        }
    }

    componentDidMount = async () => {
        axios.get('https://api.bigdatahub.co.kr/v1/datahub/datasets/search.json?pid=1002277&'+
        'TDCAccessKey=f7c857088da5680d9cbbaf992adb71d391250f415151f4fcc7bd0801bb0d7fa4&$count=5', {
        })
        .then( response => {
            try {
                this.setState({ responseFPList: response });
                this.setState({ append_FPList: this.state.responseFPList.data.entry });
            } catch (error) {
                alert(error)
            }
        })
        .catch( error => {alert(error);return false;} );
    }

    render () {
        return (
            <ScatterChart
              width={1000}
              height={300}
              margin={{
                top: 5, right: 50, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid />
              <XAxis type="number" dataKey="연령대(10세단위)" name="연령대" unit="세" />
              <YAxis type="number" dataKey="유동인구수" name="유동인구수" unit="명" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.state.append_FPList} fill="#003458" />
            </ScatterChart>
          );
    }
}

export default floatingPopulationScatterChart;