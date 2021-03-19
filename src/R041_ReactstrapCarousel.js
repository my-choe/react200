import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
/**
 * Carousel 패키지는 슬라이드를 자동 회전시키는 기능을 제공한다.
 * 이미지 텍스트, 버튼 등으로 이뤄진 슬라이드를 일정시간 단위로 다음 슬라이드로 이동시킨다.
 * 한 슬라이드에 머무는 시간은 기본값 5초가 적용된다.
 * 웹 브라우저의 가로 너비가 특정 값보다 작으면, 슬라이드 제목과 설명 부분이 표시되지 않을 수 있다.
 */
const items = [
    {
        src: 'http://topclass.chosun.com/news_img/1807/1807_008.jpg',
        altText: '슬라이드1 이미지 대체 문구',
        caption: '슬라이드1 설명',
        header: '슬라이드1 제목'
    },
    {
        src: 'http://image.dongascience.com/Photo/2018/05/8e8dcec18b1ecdea14fe4a02581e34f9.jpg',
        altText: '슬라이드2 이미지 대체 문구',
        caption: '슬라이드2 설명',
        header: '슬라이드2 제목'
    },
    {
        src: 'http://img.hani.co.kr/imgdb/resize/2019/0404/00503871_20190404.JPG',
        altText: '슬라이드3 이미지 대체 문구',
        caption: '슬라이드3 설명',
        header: '슬라이드3 제목'
    }
];

class R041_ReactstrapCarousel extends Component {
    render() {
        return (
            <UncontrolledCarousel items={items}/>
        )
    }
}

export default R041_ReactstrapCarousel;