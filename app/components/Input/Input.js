import React, { Component, PropTypes } from 'react';

import style from './style';

const Input = ( { onChange, initialState } ) => {
    return (
        <div className={style.container}>
            <div className={style.input}>
                <label for="markdown" className={style.label}> Enter Markdown Here</label>
                <textarea
                    className={style.text}
                    id="markdown"
                    onChange={onChange}
                    value={initialState} />
            </div>
        </div>
    );
}

export default Input;

