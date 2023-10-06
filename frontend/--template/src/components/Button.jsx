import React from 'react';

const Button = ({ buttonText, buttonHref, buttonType }) => {
    return (
        <div className='button' style={{ backgroundColor: buttonType }}>
            <a href={buttonHref}>{buttonText}</a>
        </div >
    );
};

export default Button;