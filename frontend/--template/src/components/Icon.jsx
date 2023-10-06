import React from 'react';

const Icon = ({ logoImg, width, height }) => {
    return (
        <img src={logoImg} width={width} height={height} alt="" />
    );
};

export default Icon;