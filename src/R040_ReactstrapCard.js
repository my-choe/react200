import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
        CardTitle, CardSubtitle, Button} from 'reactstrap';

/** 
 * Card 패키지: 이미지, 제목, 부제목, 내용, 버튼 등을 한 세트로 묶는다.
 * Card 단위로 리스트를 만들어 반복해서 출력하면, 정형화 된 콘텐츠 목록을 만들 수 있다.
 * 
*/
class R040_ReactstrapCard extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardImg top height="800px" src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg" alt="Card image" />
                    <CardBody>
                        <CardTitle>Card 제목</CardTitle>
                        <CardSubtitle>Card 부제목</CardSubtitle>
                        <CardText>Card 내용 Lorem Ipsum is simply dummy text.</CardText>
                        <Button> 버튼</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default R040_ReactstrapCard;