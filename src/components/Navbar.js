"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, GridItem } from "../utils/navbar-menu";
import { Link } from "react-router-dom";

// css
import "../css/Navbar.css";

// assets
import logo from '../assets/logo.svg';

function Navbar() {
    const [active, setActive] = useState(null);

    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                        <img src={logo} alt="logo" />
                </Link>
                <Menu setActive={setActive}>
                    <div className="navbar-menu-item-container">
                        <MenuItem setActive={setActive} active={active} item="Platform">
                            <div className="navbar-menu-item-div-link">
                                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                                <HoveredLink href="/branding">Branding</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Features">
                            <div className="navbar-menu-item-div-grid">
                                <GridItem
                                    title="Algochurn"
                                    href="https://algochurn.com"
                                    src="https://assets.aceternity.com/demos/algochurn.webp"
                                    description="Prepare for tech interviews like never before."
                                />
                                <GridItem
                                    title="Tailwind Master Kit"
                                    href="https://tailwindmasterkit.com"
                                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                    description="Production ready Tailwind css components for your next project"
                                />
                                <GridItem
                                    title="Moonbeam"
                                    href="https://gomoonbeam.com"
                                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                                    description="Never write from scratch again. Go from idea to blog in minutes."
                                />
                                <GridItem
                                    title="Rogue"
                                    href="https://userogue.com"
                                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                                    description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                                />
                            </div>
                        </MenuItem>
                        <HoveredLink link="/about">
                            About
                        </HoveredLink>
                        {/* <MenuItem setActive={setActive} active={active} item="Pricing">
                            <div className="navbar-menu-item-div-link">
                                <HoveredLink href="/hobby">Hobby</HoveredLink>
                                <HoveredLink href="/individual">Individual</HoveredLink>
                                <HoveredLink href="/team">Team</HoveredLink>
                                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                            </div>
                        </MenuItem> */}
                    </div>
                </Menu>
                <Link to="/book-demo" className="navbar-contact">
                        Book a Demo
                </Link>
            </div>
        </div>
    );
}

export default Navbar;