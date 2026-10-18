import { Link } from "react-router"
import { FaInstagram } from "react-icons/fa"
import "./navbar.css"
import GooeyNav from "../GooeyNav/GooeyNav"
import TechText from "../TeachText/TechText"

function NaBar() {
    return (
    <header className="navbar">
        <nav className="nav-links" id="nav-links">
            <GooeyNav />
        </nav>
    </header>
  )
}

export default NaBar
