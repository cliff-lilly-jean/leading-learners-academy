import React from 'react';
import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const TopNav = () => {

    return (
        // <div className="navbar">

        // </div>
        <Navbar shouldHideOnScroll className='navbar'>
            <NavbarBrand>
                {/* TODO: Get a logo */}
                <p className="font-bold text-inherit">Leading Learners Academy</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">

                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Programs
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Admission
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Parents
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Location
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarItem className="hidden lg:flex">
                    {/* TODO: Add in the school's phone number */}
                    <Link href="#">Phone Number</Link>
                </NavbarItem>
                <NavbarItem>
                    {/* TODO: Make button link pull up a form to book a visit */}
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Book a Visit
                    </Button>
                </NavbarItem>
            </NavbarContent>
            {/* Mobile Menu */}
        </Navbar>

    );
};

export default TopNav;