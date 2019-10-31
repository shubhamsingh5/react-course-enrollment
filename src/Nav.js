import React from "react";
import { Link } from "react-router-dom";
import NavStyles from "./styles/NavStyles";
import {ReactComponent as CalendarIcon} from './assets/date_range.svg'
import {ReactComponent as SearchIcon} from './assets/search.svg'

const Nav = props => {
    return (
        <nav>
            <NavStyles>
                <li>
                    <Link to="/planner">
                        <SearchIcon height="40" width="40"/>
                    </Link>
                </li>
                <li>
                    <Link to="/scheduler">
                        <CalendarIcon height="40" width="40"/>
                    </Link>
                </li>
            </NavStyles>
        </nav>
    );
};

export default Nav;
