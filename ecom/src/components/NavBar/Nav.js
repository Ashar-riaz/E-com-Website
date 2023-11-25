import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";

export default function Nav() {
    return (
        <>
            <div className="">
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <a className="navbar-brand" href="/">Hidden brand</a>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Catalog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-end">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
