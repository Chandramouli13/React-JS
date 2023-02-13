import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <>
            <header>
                <nav class="navbar fixed-top navbar-expand-lg bg-dark navbar-dark p-md-2">
                    <div class="container-md">
                        <img src="Images/tomato-logo.png" alt="tomato-logo"/>
                        <button class="navbar-toggler bg-gradient" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <div class="mx-auto"></div>
                            <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className="btn btn-outline-primary" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <button class="btn btn-outline-success m-2" type="button">Login</button>
                            </li>
                            <li class="nav-item">
                                <button class="btn btn-outline-danger m-2" type="button">Sign Up</button>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>   
            </header>
        </>
    )
}

export default Header