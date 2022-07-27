import {Link, useMatch, useResolvedPath} from "react-router-dom";
import React from "react";

/*
<CustomLink to="/home">
    Home
</CustomLink>
*/

export default function Navbar() {
    return (
        <header className="navigation" role="banner">
            <div className="navigation-wrapper">
                <a href={window.location.href+"home"} className="logo">
                    <i className="fas fa-cat"></i>
                </a>

                <nav role="navigation">
                    <ul id="js-navigation-menu" className="navigation-menu">
                        <CustomLink to="/">
                            Posts
                        </CustomLink>
                        <CustomLink to="/projects">
                            Projects
                        </CustomLink>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

function CustomLink({to, children, ...props}) {
    /*const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({
        path: resolvedPath.pathname,
        end: true
    })*/

    return (
        <li className="nav-link">
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}