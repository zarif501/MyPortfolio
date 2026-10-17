import "../../components/NavBar/navbar.css"

function NaBar() {
    return (
    <header class="navbar">
        <a href="/" class="brand">zarif.dev</a>

        <nav class="nav-links" id="nav-links">
        <a class="nav-link" href="#home">Home</a>
        <a class="nav-link" href="#about">About</a>
        <a class="nav-link" href="#contact">Contact</a>
        </nav>

        <div class="nav-contact">
        <h1></h1>
        <a href="https://instagram.com/zarif.dev" target="_blank">
            <i class="fa-brands fa-instagram"></i>
        </a>
        </div>
    </header>
  )
}

export default NaBar
