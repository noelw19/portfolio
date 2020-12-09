import { Link } from "react-router-dom";

import './styles.css'

function Nav () {
    return (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/cv">CV</Link>
            </li>
          </ul>
    </nav>
    )
}

export default Nav;