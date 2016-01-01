import React, { Component } from 'react';
import marked from 'marked';
/*** styling ***/
import 'normalize.css';
import style from './style';
/*** Components ***/
import Header        from '../../components/Header/';
import Input       from '../../components/Input/';
import LivePreview from '../../components/LivePreview';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.rawMarkup    = this.rawMarkup.bind(this);
        this.state = {
            url: 'https://github.com/natac13/Markdown-Previewer-React',
            input: `
### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

A [link](http://example.com).`,
            title: 'Natac\'s Markdown Previewer'
        }
    }

    handleChange(event) {
        const { value } = event.target;
        this.setState({
            input: value
        });
    }

    rawMarkup() {
        var raw = marked(this.state.input, {sanitize: true});
        return { __html: raw };
    }

    render() {
        const { input, title, url } = this.state;
        return (
            <div className={style.app}>
                <Header title={title} url={url}/>
                <Input onChange={this.handleChange} initialState={input} />
                <LivePreview getMarkdown={() => this.rawMarkup()} />
            </div>
        );
    }

}