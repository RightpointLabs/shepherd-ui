import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>Header</h2>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/expert">Expert</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;