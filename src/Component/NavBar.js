import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class NavBar extends Component {
    render() {
        return (<div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        News24*7
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link active dropdown-toggle" to="/" role="button"
                                   aria-expanded="false" data-bs-toggle="dropdown">Category
                                </Link>
                                <div className="dropdown-menu position-static">
                                    <Link className="dropdown-item" to="/business">Business</Link>
                                    <div className="dropdown-divider" style={{borderTop: '1px solid #343a40'}}></div>
                                    <Link className="dropdown-item" to="/entertainment">Entertainment</Link>
                                    <div className="dropdown-divider" style={{borderTop: '1px solid #343a40'}}></div>
                                    <Link className="dropdown-item" to="/general">General</Link>
                                    <div className="dropdown-divider" style={{borderTop: '1px solid #343a40'}}></div>
                                    <Link className="dropdown-item" to="/health">Health</Link>
                                    <div className="dropdown-divider" style={{borderTop: '1px solid #343a40'}}></div>
                                    <Link className="dropdown-item" to="/sports">Sports</Link>
                                    <div className="dropdown-divider" style={{borderTop: '1px solid #343a40'}}></div>
                                    <Link className="dropdown-item" to="/technology">Technology</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">
                                    About
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex ml-auto" role="search">
                            {/* Add 'ml-auto' class to move the search form to the right */}
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success mx-2" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>)
    }
}

export default NavBar;
