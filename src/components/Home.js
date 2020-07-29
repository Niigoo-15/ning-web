import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Slides from './Slides';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Slides/>
                <Jumbotron>
                    <h1 className="display-3">Hello, สวัสดีชาวโลก!</h1>
                    <p className="lead">พยายามเป็นคนที่ใช่ แต่ลืมไปคนที่ใช่ไม่ต้องพยายาม</p>
                    <hr className="my-2" />
                    <p>ความรู้สึกของฉันมันว่างเปล่า เหมือนกับหัวใจของคุณ ที่มันไม่เคยมีฉันอยู่ในนั้น</p>
                    <p className="lead">
                        <Button color="primary">กดใจเราดูสิ</Button>
                    </p>
                </Jumbotron>
               
            </div>
        )
    }
}
