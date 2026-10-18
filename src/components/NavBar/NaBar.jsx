import { Link } from "react-router"
import { FaInstagram } from "react-icons/fa"
import "./navbar.css"
import GooeyNav from "../GooeyNav/GooeyNav"
import TechText from "../TeachText/TechText"

function NaBar() {
    return (
    <header className="navbar">
        <TechText />

        <nav className="nav-links" id="nav-links">
            <GooeyNav />
        </nav>

        <div className="nav-contact">
        <h1></h1>
        <Link to="https://instagram.com/zarif.dev" target="_blank">
            <FaInstagram/>
        </Link>
        </div>
    </header>
  )
}

export default NaBar
