import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/logo.png';


export default function HomeHeader() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-sm navbar-dark nav-style-row">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} id="logo" alt="Logo" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse nav-style" id="collapsibleNavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link
                                className={`nav-link fs-5 text-dark ${location.pathname === '/' ? 'active' : ''}`}
                                to="/"
                                id="home"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link fs-5 text-dark ${location.pathname === '/about-us' ? 'active' : ''}`}
                                to="/about-us"
                            >
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link fs-5 text-dark ${location.pathname === '/student-section' ? 'active' : ''}`}
                                to="/student-section"
                            >
                                Student Section
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link fs-5 text-dark ${location.pathname === '/parent-section' ? 'active' : ''}`}
                                to="/parent-section"
                            >
                                Parent Section
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link fs-5 text-dark ${location.pathname === '/volunteer' ? 'active' : ''}`}
                                to="/volunteer"
                            >
                                Volunteer
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link fs-5 text-dark ${location.pathname === '/acedemics' ? 'active' : ''}`}
                                to="/acedemics"
                            >
                                Academics
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link fs-5 text-dark ${location.pathname === '/blog' ? 'active' : ''}`}
                                to="/blog"
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link fs-5 text-dark ${location.pathname === '/contactUs' ? 'active' : ''}`}
                                to="/contactUs"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export function Header({headVal}) {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="bg-img-header d-flex align-items-center justify-content-center text-center">
                    <h2 className="header-title">{headVal}</h2>
                </div>
            </div>
        </>
    );
}
