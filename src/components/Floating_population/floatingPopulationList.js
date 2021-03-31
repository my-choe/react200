import React, { Component } from 'react';
import axios from "axios";

/** 2103310부로 Big Data Hub 서비스 종료됨 */
class floatingPopulationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseFPList: '',
            append_FPList: '',
        }
    }

    componentDidMount() {
        this.callFloatPopulListApi()
    }

    callFloatPopulListApi = async () => {
            axios.get('https://api.bigdatahub.co.kr/v1/datahub/datasets/search.json?pid=1002277&'+
            'TDCAccessKey=8ce7de5510260c96014c4bb83e3c6bfe967b73fbb24c8e948b846597c395f1eb&$count=30', {
            })
            .then( response => {
                try {
                    this.setState({ responseFPList: response });
                    this.setState({ append_FPList: this.FloatPopulListAppend() });
                } catch (error) {
                    alert(error)
                }
            })
            .catch( error => {alert(error);return false;} );
    }

    FloatPopulListAppend = () => {
        let result = []
        var FPList = this.state.responseFPList.data
        var jsonString = JSON.stringify(FPList)
        jsonString = jsonString.replace(/\(1시간단위\)/g, '')
        jsonString = jsonString.replace(/\(10세단위\)/g, '')
        var json = JSON.parse(jsonString)

        for(let i=0; i<json.entry.length; i++){
            var data = json.entry[i]
            var idx = i+1
            result.push(
                <tr class="hidden_type">
                    <td>{idx}</td>
                    <td>{data.일자}</td>
                    <td>{data.시간}</td>
                    <td>{data.연령대}</td>
                    <td>{data.성별}</td>
                    <td>{data.시}</td>
                    <td>{data.군구}</td>
                    <td>{data.유동인구수}</td>
                </tr>
            )
        }
        return result
    }

    render () {
        return (
            <section class="sub_wrap" >
                <article class="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                    <div class="li_top">
                        <h2 class="s_tit1">서울시 유동인구 데이터 - 19년 11월</h2>
                    </div>
                    <div class="list_cont list_cont_admin">
                        <table class="table_ty1 fp_tlist">
                            <tr>
                                <th>Row</th>
                                <th>일자</th>
                                <th>시간</th>
                                <th>연령대</th>
                                <th>성별</th>
                                <th>시</th>
                                <th>군구</th>
                                <th>유동인구수</th>
                            </tr>
                        </table>	
                        <table class="table_ty2 fp_tlist">
                            {this.state.append_FPList}
                        </table>
                    </div>
                </article>
            </section>
        );
    }
}

export default floatingPopulationList;