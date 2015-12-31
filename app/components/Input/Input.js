import React, { Component, PropTypes } from 'react';

import style from './style';

const Input = ( { onChange } ) => {
    return (
        <div className={style.container}>
            <div className={style.input}>
                <label for="markdown"> Enter Markdown Here</label>
                <textarea col="50" row="50" id="markdown" onChange={onChange} />
            </div>
        </div>
    );
}

export default Input;

