import React from 'react';

import style from './style';

const LivePreview = ( { getMarkdown } ) => {
    console.log(getMarkdown())
    return (
        <div className={style.container}>
            <div className={style.preview} dangerouslySetInnerHTML={getMarkdown()}>

            </div>
        </div>
    )

}

export default LivePreview;