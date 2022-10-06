import React from "react";
import {Link} from 'react-router-dom'
const Header = ()=>{
    return(
        <div className="box" id="heading">
            <Link to="/">
                <h1>DS To Do</h1>
            </Link>
        </div>
    )
}

export default Header;