import React from 'react'
import { Link } from 'react-router-dom'

function NavBar()
{
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to = "/" className="nav-link">FedEx</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to = "/search" className="nav-link" >Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/employees" className="nav-link" >Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/about" className = "nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/contact" className="nav-link" >Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    )
}

export default NavBar;