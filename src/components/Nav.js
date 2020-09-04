import React from "react";
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark py-3">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
