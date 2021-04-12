import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import $ from 'jquery';
import Swal from 'sweetalert2'

class SoftwareView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            before_swtcode: props.match.params.swtcode,
            selectedFile: null,
        }
    }

    componentDidMount () {
        if(this.state.before_swtcode == 'register'){
            $('.modifyclass').hide()
        }else{
            this.callSwToolInfoApi()
            $('.saveclass').hide()
        }
    }

    callSwToolInfoApi = async () => {
        axios.post('/api/Swtool?type=list', {
            is_Swtcode: this.state.before_swtcode,
        })
        .then( response => {
            try {
                var data = response.data.json[0]
                $('#is_Swt_toolname').val(data.swt_toolname)
                $('#is_Swt_demo_site').val(data.swt_demo_site)
                $('#is_Giturl').val(data.swt_github_url)
                $('#is_Comments').val(data.swt_comments)
                $('#is_Swt_function').val(data.swt_function)
                var manualName = data.swt_manual_path.replace('/swmanual/','')
                var fileName = data.swt_big_imgpath.replace('/image/','')
                var fileName2 = data.swt_imagepath.replace('/image/','')
                $('#upload_img').prepend('<img id="uploadimg" src="'+data.swt_big_imgpath+'"/>')
                $('#upload_img2').prepend('<img id="uploadimg2" src="'+data.swt_imagepath+'"/>')


                $('#imagefile').val(fileName)
                $('#imagefile2').val(fileName2)
                $('#manualfile').val(manualName)

                if($('#uploadimg').attr('src').indexOf("null") > -1){
                    $('#uploadimg').hide()
                }

                if($('#uploadimg2').attr('src').indexOf("null") > -1){
                    $('#uploadimg2').hide()
                }


            } catch (error) {
                alert('작업중 에러가 발생하였습니다.')
            }
        })
        .catch( error => {alert('작업중 오류가 발생하였습니다.');return false;} );
    }

    submitClick = async (type, e) => {

        this.Swt_toolname_checker = $('#is_Swt_toolname').val();
        this.Swt_demo_site_checker = $('#is_Swt_demo_site').val();
        this.Giturl_checker = $('#is_Giturl').val();
        this.Comments_checker = $('#is_Comments').val();
        this.Swt_function_checker = $('#is_Swt_function').val();

        this.fnValidate = (e) => {
            if(this.Swt_toolname_checker === '') {
                $('#is_Swt_toolname').addClass('border_validate_err');
                alert('툴 이름을 다시 확인해주세요.')
                return false;
            }
            $('#is_Swt_toolname').removeClass('border_validate_err');

            if(this.Swt_demo_site_checker === '') {
                $('#is_Swt_demo_site').addClass('border_validate_err');
                alert('데모 URL을 다시 확인해주세요.')
                return false;
            }
            $('#is_Swt_demo_site').removeClass('border_validate_err');

            if(this.Giturl_checker === '') {
                $('#is_Giturl').addClass('border_validate_err');
                alert('Github URL을 다시 확인해주세요.')
                return false;
            }
            $('#is_Giturl').removeClass('border_validate_err');

            if(this.Comments_checker === '') {
                $('#is_Comments').addClass('border_validate_err');
                alert('설명을 다시 확인해주세요.')
                return false;
            }
            $('#is_Comments').removeClass('border_validate_err');

            if(this.Swt_function_checker === '') {
                $('#is_Swt_function').addClass('border_validate_err');
                alert('상세기능을 다시 확인해주세요.')
                return false;
            }
            $('#is_Swt_function').removeClass('border_validate_err');
            return true;
        }

        if(this.fnValidate()){
            var jsonstr = $("form[name='frm']").serialize();
            jsonstr = decodeURIComponent(jsonstr);
            var Json_form = JSON.stringify(jsonstr).replace(/\"/gi,'')
            Json_form = "{\"" +Json_form.replace(/\&/g,'\",\"').replace(/=/gi,'\":"')+"\"}";
        
            try {
                const response = await fetch('/api/Swtool?type='+type, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: Json_form,
                });
                const body = await response.text();
                if(body == "succ"){
                    if(type == 'save'){
                        this.sweetalertSucc('Software Tools 등록이 완료되었습니다.', false)
                    }else if(type == "modify"){
                        this.sweetalertSucc('Software Tools 수정이 완료되었습니다.', false)
                    }
                    setTimeout(function() {
                        this.props.history.push('/SoftwareList');
                        }.bind(this),1500
                    );
                }else{
                    alert('작업중 오류가 발생하였습니다.')
                }  
            } catch (error) {
                alert('작업중 오류가 발생하였습니다.')
            }
        }
    };

    sweetalertSucc = (title, showConfirmButton) => {
        Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: title,
            showConfirmButton: showConfirmButton,
            timer: 1000
        })
    }

    handleFileInput(type, e){
        if(type == "file"){
            $('#imagefile').val(e.target.files[0].name)
        }else if(type == 'file2'){
            $('#imagefile').val(e.target.files[0].name)
        }else if(type == 'manual'){
            $('#manualfile').val(e.target.files[0].name)
        }

        this.setState({
            selectedFile : e.target.files[0],
        })
        // line114에서 실제 파일이 selectedFile에 할당하기 전에 함수(handlePostManual, handlePostImage) 실행되면
        // selectedFile값을 참조할 수 없기 때문에 setTimeout 함수로 파일이 할당되기까지 지연 시간 설정
        setTimeout(function() {
            if(type == 'manual'){
                this.handlePostMenual()
            }else{
                this.handlePostImage(type)
            }
        }.bind(this),1
        );
    }

    // formData는 자바스크립트에서 서버에 데이터를 전달해주는 api이다.
    // formData 객체를 생성하고 append함수로 key, value를 할당하면, 문자열과 파일을 전송할 수 있다.
    handlePostMenual(){
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        return axios.post("/api/upload?type=uploads/swmanual/", formData).then(res => {
            this.setState({menualName : res.data.filename})
            $('#is_MenualName').remove()  // 여러번 매뉴얼 파일을 업로드 하는 경우, 가장 최근에 올린 파일 1개의 경로만 DB에 저장해야 한다. 매뉴얼 파일 경로가 할당된 <input> 태그가 있다면 삭제한다.
            $('#upload_menual').prepend('<input id="is_MenualName" type="hidden"'
            +'name="is_MenualName" value="/swmanual/'+this.state.menualName+'"}/>')
        }).catch(error => {
            alert('작업중 오류가 발생하였습니다.', error, 'error', '닫기')
        })
    }    

    handlePostImage(type){
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        return axios.post("/api/upload?type=uploads/image/", formData).then(res => {
            if(type =='file'){
                this.setState({fileName : res.data.filename})
                $('#is_MainImg').remove()
                $('#uploadimg').remove() // 
                $('#upload_img').prepend('<img id="uploadimg" src="/image/'
                +this.state.fileName+'"/>')
                $('#upload_img').prepend('<input id="is_MainImg" type="hidden"'
                +'name="is_MainImg" value="/image/'+this.state.fileName+'"}/>')
            }else if(type =='file2'){
                this.setState({fileName2 : res.data.filename})
                $('#is_LabelImg').remove()
                $('#uploadimg2').remove()
                $('#upload_img2').prepend('<img id="uploadimg2" src="/image/'
                +this.state.fileName2+'"/>')
                $('#upload_img2').prepend('<input id="is_LabelImg" type="hidden"'
                +'name="is_LabelImg" value="/image/'+this.state.fileName2+'"}/>')
            }
        }).catch(error => {
            alert('작업중 오류가 발생하였습니다.')            
        })
    }



    render () {
        return (
            <section class="sub_wrap">
                <article class="s_cnt mp_pro_li ct1">
                    <div class="li_top">
                        <h2 class="s_tit1">Software Tools 등록/수정</h2>
                    </div>
                    <div class="bo_w re1_wrap re1_wrap_writer">
                        <form name="frm" id="frm" action="" onsubmit="" method="post" >
                            <input id="is_Swtcode" type="hidden" name="is_Swtcode" />
                            <input id="is_Email" type="hidden" name="is_Email" value="guest" />
                            <input id="is_beforeSwtcode" type="hidden" name="is_beforeSwtcode" value={this.state.before_swtcode} />
                            <article class="res_w">
                                <p class="ment" style={{"text-align": "right"}}>
                                    <span class="red">(*)</span>표시는 필수입력사항 입니다.
                                </p>
                                <div class="tb_outline">
                                    <table class="table_ty1">
                                        <tr>
                                            <th>
                                                <label for="is_Swt_toolname">툴 이름<span class="red">(*)</span></label>
                                            </th>
                                            <td>
                                                <input type="text" name="is_Swt_toolname" id="is_Swt_toolname" class="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <label for="is_Swt_demo_site">데모 URL<span class="red">(*)</span></label>
                                            </th>
                                            <td>
                                                <input type="text" name="is_Swt_demo_site" id="is_Swt_demo_site" class="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <label for="is_Giturl">Github URL<span class="red">(*)</span></label>
                                            </th>
                                            <td>
                                                <input type="text" name="is_Giturl" id="is_Giturl" class="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <label for="is_Comments">설명<span class="red">(*)</span></label>
                                            </th>
                                            <td>
                                                <textarea name="is_Comments" id="is_Comments" rows="" cols=""></textarea>
                                            </td>
                                        </tr>
                                         <tr class="div_tb_tr fileb">
                                            <th>
                                                메뉴얼 파일 #1
                                            </th>
                                            <td class="fileBox fileBox_w1">
                                                <label for="uploadBtn1" class="btn_file">파일선택</label>
                                                <input type="text" id="manualfile" class="fileName fileName1" 
                                                readonly="readonly" placeholder="선택된 파일 없음"/>
                                                <input type="file" id="uploadBtn1" class="uploadBtn uploadBtn1"
                                                onChange={e => this.handleFileInput('manual',e)}/>	
                                                <div id="upload_menual">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                메인 이미지
                                            </th>
                                            <td className="fileBox fileBox1">
                                                <label htmlFor='imageSelect' className="btn_file">파일선택</label>
                                                <input type="text" id="imagefile" className="fileName fileName1"
                                                readOnly="readonly" placeholder="선택된 파일 없음"/>
                                                <input type="file" id="imageSelect" className="uploadBtn uploadBtn1"
                                                onChange={e => this.handleFileInput('file',e)}/>
                                                <div id="upload_img">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                라벨 이미지
                                            </th>
                                            <td className="fileBox fileBox2">
                                                <label htmlFor='imageSelect2' className="btn_file">파일선택</label>
                                                <input type="text" id="imagefile2" className="fileName fileName1"
                                                readOnly="readonly" placeholder="선택된 파일 없음"/>
                                                <input type="file" id="imageSelect2" className="uploadBtn uploadBtn1"
                                                onChange={e => this.handleFileInput('file2',e)}/>
                                                <div id="upload_img2">
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <label for="is_Swt_function">상세 기능<span class="red">(*)</span></label>
                                            </th>
                                            <td>
                                                <textarea name="is_Swt_function" id="is_Swt_function" rows="" cols=""></textarea>
                                            </td>
                                        </tr>
                                    </table>
                                    <div class="btn_confirm mt20" style={{"margin-bottom": "44px"}}>
                                        <a href="javascript:" className="bt_ty bt_ty2 submit_ty1 saveclass" 
                                        onClick={(e) => this.submitClick('save', e)}>저장</a>
                                        <a href="javascript:" className="bt_ty bt_ty2 submit_ty1 modifyclass" 
                                        onClick={(e) => this.submitClick('modify', e)}>수정</a>
                                        <Link to={'/SoftwareList'} className="bt_ty bt_ty1 cancel_ty1">취소</Link>
                                    </div>
                                </div>
                            </article>
                        </form>	
                    </div> 
                </article>
            </section>
        );
    }
}

export default SoftwareView;