import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiPlusCircles } from 'react-icons/fi'

function Navbar () {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/"><FiHome /></Link>
        </li>
        <li>
          <Link to="/archive">Arsip</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar