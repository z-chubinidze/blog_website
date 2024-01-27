
import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";


function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
            setIsScrolled(scrollTop > window.innerHeight * 0.3);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isHomePage = location.pathname === "/home";

    const navbarClass = isScrolled ? "navbar navbar-expand-lg fixed-top scrolled" : "navbar navbar-expand-lg fixed-top";

    let login = window.localStorage.getItem("loggedin")
    const navigate = useNavigate();

    function logaut() {
        window.localStorage.setItem("loggedin", false)
    }

    function signin() {
        navigate('/');
    }
    return (
        <nav className={`${navbarClass} ${isHomePage ? "home-page" : ""} pt-3 pb-3`}>
            <div className="container-fluid ps-3 ps-lg-5 pe-lg-5 pe-3">

                <Link className="navbar-brand" to={login === "true" ? "/home" : "/"}>
                    <img src="../images/typology_logo.png" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <Link className="navbar-brand" to={login === "true" ? "/home" : "/"}>
                            <img src="../images/typology_logo.png" alt="typology_logo" />
                        </Link>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body ">
                        <ul className="navbar-nav justify-content-center flex-grow-1 gap-4 ">
                            <li className="nav-item">
                                <Link className="nav-link" to={login === "true" ? "/home" : "/"}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item drop-link ">
                                <Link to={login === "true" ? "/blog" : "/"} className="nav-link drop-link"  >
                                    Blog
                                </Link>
                                <ul className=" dropdown position-absolute z-3">
                                    <li>
                                        <Link to={login === "true" ? "/createBlogs" : "/"} className="dropdown-item">
                                            Create New Blog
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to={login === "true" ? "/contact" : "/"} >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <Link to={"/"}>
                            <button type="button" className="btn btn-transparent signup-btn border-0"
                                onClick={login === "true" ? logaut : signin}
                            >{login === "true" ? "LOG OUT" : "SIGN IN"}</button>
                        </Link>

                    </div>

                </div>

                <Outlet />
            </div>
        </nav>
    );
}

export default Navbar;

