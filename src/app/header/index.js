import {Link} from "react-router-dom";
import React from "react";

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/tabPage'>TabPage</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;