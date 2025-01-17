import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/logo.png';

export default function HomeHeader() {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null); // Reference for the sidebar

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar open/close
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close sidebar if clicked outside and it's open
            if (
                isSidebarOpen && 
                sidebarRef.current && 
                !sidebarRef.current.contains(event.target) && 
                !event.target.classList.contains('navbar-toggler')
            ) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSidebarOpen]);

    return (
        <div className='about-us'>
            <nav className="navbar navbar-expand-xl navbar-dark nav-style-row">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} id="logo" alt="Logo" />
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleSidebar} // Toggle sidebar
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse nav-style" id="collapsibleNavbar">
                        <ul className="navbar-nav ms-auto">
                            {['/RTS', '/About-Us', '/Student-Section', '/Parent-Section', '/Volunteer', '/Academics', '/Blog', '/ContactUs'].map((path, index) => (
                                <li className="nav-item" key={index}>
                                    <Link
                                        className={`nav-link font-for-path text-dark ${location.pathname === path ? 'active' : ''}`}
                                        to={path}
                                    >
                                        {path === '/RTS'
                                            ? 'Home' : path === '/Blog'
                                      ? 'Blog & Events'
                                            : path
                                                .replace('/', '')
                                                .replace(/-/g, ' ')
                                                .replace(/([a-z])([A-Z])/g, '$1 $2')
                                                .trim()}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <div
                ref={sidebarRef} // Assign reference to sidebar
                className={`sidebar ${isSidebarOpen ? 'open' : ''}`}
            >
                <button className="close-btn" onClick={toggleSidebar}>
                    &times;
                </button>
                <ul>
                    {['/RTS', '/About-Us', '/Student-Section', '/Parent-Section', '/Volunteer', '/Academics', '/Blog', '/ContactUs'].map((path, index) => (
                        <li key={index}>
                            <Link
                                className={`sidebar-link ${location.pathname === path ? 'active' : ''}`}
                                to={path}
                                onClick={toggleSidebar} // Close sidebar on link click
                            >
                                {path === '/RTS'
                    ? 'Home'
                    : path === '/Blog'
                    ? 'Blog & Events'
                    : path
                        .replace('/', '')
                        .replace(/-/g, ' ')
                        .replace(/([a-z])([A-Z])/g, '$1 $2')
                        .trim()}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export function Header({ headVal }) {
    return (
        <div className='about-us mt-2'>
            <div className="container-fluid p-0">
                <div className="bg-img-header d-flex align-items-center justify-content-center text-center p-4">
                    <h2 className="header-title">{headVal}</h2>
                </div>
            </div>
        </div>
    );
}
