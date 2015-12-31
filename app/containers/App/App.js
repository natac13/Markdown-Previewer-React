import React, { Component } from 'react';
import marked from 'marked';
import 'normalize.css';
import style from './style';

import Input from '../../components/Input/';
import LivePreview from '../../components/LivePreview';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.rawMarkup    = this.rawMarkup.bind(this);
        this.state = {
            input: ''
        }
    }

    handleChange(event) {
        const { value } = event.target;
        console.log(value);
        this.setState({
            input: value
        });
    }

    rawMarkup() {
        var raw = marked(this.state.input, {sanitize: true});
        return { __html: raw };
    }

    render() {
        return (
            <div className={style.app}>
                <Input onChange={this.handleChange} />
                <LivePreview getMarkdown={() => this.rawMarkup()} />
            </div>
        );
    }

}