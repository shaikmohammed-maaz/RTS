import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/logo.png';

export default function HomeHeader() {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-xl navbar-dark nav-style-row">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} id="logo" alt="Logo" />
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleSidebar} // Open sidebar on toggle button click
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse nav-style" id="collapsibleNavbar">
                        <ul className="navbar-nav ms-auto">
                            {/* Navbar Links */}
                            {['/RTS', '/about-us', '/student-section', '/parent-section', '/volunteer', '/acedemics', '/blog', '/contactUs'].map((path, index) => (
                                <li className="nav-item" key={index}>
                                    <Link
                                        className={`nav-link fs-5 text-dark ${location.pathname === path ? 'active' : ''}`}
                                        to={path}
                                    >
                                        {path === '/RTS'
                                            ? 'Home'
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
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSidebar}>
                    &times;
                </button>
                <ul>
                    {['/RTS', '/about-us', '/student-section', '/parent-section', '/volunteer', '/acedemics', '/blog', '/contactUs'].map((path, index) => (
                        <li key={index}>
                            <Link
                                className={`sidebar-link ${location.pathname === path ? 'active' : ''}`}
                                to={path}
                                onClick={toggleSidebar} // Close sidebar on link click
                            >
                                {path.replace('/', '').replace('-', ' ')}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}


export function Header({ headVal }) {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="bg-img-header d-flex align-items-center justify-content-center text-center p-4">
                    <h2 className="header-title">{headVal}</h2>
                </div>
            </div>
        </>
    );
}
