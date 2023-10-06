import React from 'react';

const Link = ({ linkText, linkUrl }) => {
    return (
        <div className='link'>
            <a href={linkUrl}>{linkText}</a>
        </div>
    );
};

export default Link;