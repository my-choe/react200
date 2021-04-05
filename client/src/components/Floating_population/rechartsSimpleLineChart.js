import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

/**
 * recharts 패키지는 react에서 간편하게 다양한 형태의 chart를 구현할 수 있도록 api를 제공한다.
 * [npm install --save recharts]
 */
const data = [
    { '군구': '광진구', '유동 인구 수': 32760, '비유동 인구 수': 34000},
    { '군구': '동대문구', '유동 인구 수': 30480, '비유동 인구 수': 56000},
    { '군구': '마포구', '유동 인구 수': 27250, '비유동 인구 수': 23000},
    { '군구': '구로구', '유동 인구 수': 49870, '비유동 인구 수': 67000},
    { '군구': '강남구', '유동 인구 수': 51420, '비유동 인구 수': 55000},
]

export default class rechartsSimpleLineChart extends PureComponent {
    static jsfiddleUlr = 'https://jsfiddle.net/alidingling/sqjtetw0';

    render(){
        return (
            <LineChart
                width={1900}
                height={600}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5}}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="군구" /><YAxis/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="유동 인구 수" stroke="#8884d8" activeDot={{ r: 8}} />
                <Line type="monotone" dataKey="비유동 인구 수" stroke="#82ca9d" activeDot={{ r: 8}} />
            </LineChart>
        )
    }
}