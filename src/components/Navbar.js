"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, GridItem } from "./navbar-menu";
import { Link } from "react-router-dom";

// css
import "../css/Navbar.css";
import { LuMonitorDot } from "react-icons/lu";
import { TbCapture } from "react-icons/tb";
import { GrAnalytics } from "react-icons/gr";
import { LuAlertTriangle } from "react-icons/lu";

// assets
import logo from '../assets/logo.svg';
import parkingAccess from '../assets/navbar/parking-access.svg'; 
import guestManagement from '../assets/navbar/guest-management.svg';
import threatDetection from '../assets/navbar/threat-detection.svg';
import garagePatrol from '../assets/navbar/garage-patrol.svg';

function Navbar() {
    const [active, setActive] = useState(null);

    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="logo" />
                </Link>

                {/* menu */}
                <Menu setActive={setActive}>
                    <div className="navbar-menu-item-container">
                        <MenuItem setActive={setActive} active={active} item="Platform">
                            <div className="navbar-menu-item-div-link">
                                <HoveredLink link="/platform/detection" icon={<TbCapture />}>
                                    Detection
                                </HoveredLink>
                                <HoveredLink link="/platform/analytics" icon={<GrAnalytics />}>
                                    Analytics
                                </HoveredLink>
                                {/* <HoveredLink link="/web-dev" icon={<LuMonitorDot />}>
                                    Monitor
                                </HoveredLink>
                                <HoveredLink link="/branding" icon={<LuAlertTriangle />}>
                                    Alert
                                </HoveredLink> */}
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Use Cases">
                            <div className="navbar-menu-item-div-grid">
                                <GridItem
                                    title="Security Patrol"
                                    href="https://userogue.com"
                                    src={garagePatrol}
                                    description="Real-time monitoring of unauthorized entries, violations, and security incidents"
                                />
                                <GridItem
                                    title="Threat Detection"
                                    href="https://algochurn.com"
                                    src={threatDetection}
                                    description="Automated threat detection and instant alerts with our vision-driven solution"
                                />
                                {/* <GridItem
                                    title="Parking Access"
                                    href="https://tailwindmasterkit.com"
                                    src={parkingAccess}
                                    description="Touchless access for residents and staff with our AI-powered camera"
                                />
                                <GridItem
                                    title="Guest Management"
                                    href="https://gomoonbeam.com"
                                    src={guestManagement}
                                    description="Seamless visitor access with our streamline guest parking system"
                                /> */}
                            </div>
                        </MenuItem>
                        <Link to="/technology" onMouseEnter={() => setActive(null)}>
                            About
                        </Link>
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

                {/* contact */}
                <Link to="/book-demo" className="navbar-contact">
                    Book a Demo
                </Link>
            </div>
        </div>
    );
}

export default Navbar;