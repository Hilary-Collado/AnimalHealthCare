import React from "react";
import '../SASS/Header.sass'

function Header() {
    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <div class="container">
                        <a class="navbar-brand" href="#">
                            <img src="" alt="Logo" />
                        </a>
                    </div>
                        <ul className="navbar-nav itemList">
                            <li className="nav-item item"><a className="nav-link" href="">Products</a></li>
                            <li className="nav-item item"><a className="nav-link" href="">Solution</a></li>
                            <li className="nav-item item"><a className="nav-link" href="">Find Us</a></li>
                            <li className="nav-item item"><a className="nav-link" href="">Inquiry Us</a></li>
                            <button className="btn button">Sing Up</button>
                        </ul>
                </nav>
            </header>
        </>
    )

}
export default Header