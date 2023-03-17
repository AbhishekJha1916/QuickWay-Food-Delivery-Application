import React from 'react'
import logo from "./assets/images/logo.png"

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo" width="45" height="30" class="d-inline-block align-text-top" />
                        Quick<span>Way</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Features</a>
                            </li>
                        </ul>
                        <form class="d-flex" style={{paddingLeft: 950}}>
                            <button class="btn btn-outline-success me-2" type="submit">Sign In</button>
                            <button class="btn btn-success" type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
