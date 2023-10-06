import React from 'react';
import Icon from './Icon';
import Button from './Button';
import NavLinks from './NavLinks';


const Navbar = ({ logoImg, navLinksArr, contactNum, contactBtnCopy }) => {

    return (
        <div className='navbar'>
            <div className="navbar-container">
                <div className="navbar-container--left">
                    <div className="navbar-logo">
                        <Icon
                            width={150}
                            height={150}
                            img={logoImg}
                        />
                    </div>
                    <div className="navbar-links">
                        <NavLinks navLinksArr={[
                            { text: 'test', url: '#' },
                            { text: 'run', url: '/' },
                            { text: 'good', url: '/good' },
                        ]} />
                    </div>
                </div>
                <div className="navbar-container--right">
                    <div className="navbar-contact-num">
                        {contactNum}
                    </div>
                    <div className="navbar-contact-btn">
                        <Button
                            buttonType={'contact'}
                            buttonText={contactBtnCopy}
                            buttonHref={'#'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;