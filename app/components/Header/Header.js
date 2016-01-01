import React, { PropTypes } from 'react';

import style from './style';

const Header = ( { title, url } ) => {
    return (
        <header className={style.container}>
            <h1 className={style.title}> {title} </h1>
            <a
                href={url}
                title="Source Code"
                target="_blank"
                className={style.code} >
                View Source Code on My Github @natac13</a>
        </header>
    )
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
}

Header.defaultProps = {
    title: 'Default Header Title...wamp wamp',
    url: 'http//:seancampbellnatac.com'
}

export default Header;