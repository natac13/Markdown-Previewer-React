import React from 'react';

import style from './style';

const LivePreview = ( { markdown } ) => {

    return (
        <div className={style.container}>
            {markdown}
        </div>
    )

}

export default LivePreview;