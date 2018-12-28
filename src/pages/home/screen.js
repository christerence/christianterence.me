import React, {Component} from 'react';
import HomeTemplate from './template';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    onClickPic = () => {
        window.open('https://www.linkedin.com/in/christianterencecabauatan/')
    }

    render() {
        return (
            <HomeTemplate onClickPic={this.onClickPic}/>
        )
    }
}