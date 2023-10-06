import React from 'react';
import Link from './Link';

const NavLinks = ({ navLinksArr }) => {

    return (
        <div className='nav-links'>

            {navLinksArr.map(link => {
                return (
                    <Link
                        linkText={link.text}
                        linkUrl={link.url}
                    />
                );
            })}

        </div>
    );
};

export default NavLinks;