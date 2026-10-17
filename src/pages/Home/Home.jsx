import rocket from "../../assets/icons/rocket.svg"
import hero from "../../assets/images/hero.svg"

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

import "../Home/home.css"
 
function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-contents">
          <div className="hero-hook">
            <img src={rocket} alt="" />
            <p>Crafted to inspire.</p>
          </div>

          <h1>
            Computer
            <span>Engineer</span>
          </h1>

          <p>
            Building digital experiences with clean code, thoughtful design, and
            innovative solutions.
          </p>

          <div className="hero-teach-tools">
            <div>Html</div>
            <div>Jacascript</div>
            <div>React</div>
            <div>Python</div>
          </div>

          <div className="hero-btn">
            <button>View Projects</button>
            <button id="contact-me">Contact Me</button>
          </div>

          <div className="hero-social-icons">
            <a href="https://instagram.com/mrr_zarif" target="_blank">
              < FaInstagram/>
            </a>

            <a href="https://github.com/zarif501" target="_blank">
              < FaGithub/>
            </a>

            <a
              href="https://linkedin.com/in/zarif-nazari-b17447336"
              target="_blank"
            >
              < FaLinkedin/>
            </a>
          </div>
        </div>

        <div className="hero-img">
          <img src={hero} alt="Computer engineering illustration" />
        </div>
      </section>

      <main className="about">
        <div id="about" className="about-title">
          <h1>
            About ME
            <span>"Transforming ideas into digital experiences" </span>
          </h1>
        </div>

        <div className="about-me">
          <div className="about-contents">
            <h2>
              Hello, I'm <span> Zarif Nazari</span>
            </h2>

            <p>
              I’m a Computer Engineering student passionate about developing
              modern digital experiences through code. I enjoy building
              projects, solving real-world problems, and exploring emerging
              technologies. With a strong focus on continuous learning, I strive
              to build efficient software.
            </p>

            <strong id="my-idea">
              <span id="about-idea-star">🌟</span>Leveraging AI as a
              professional tool, not a replacement.
            </strong>
            <div className="about-btn">
              <button
                className="cv-btn"
                onclick="alert('Server error: data not fund')"
              >
                Download CV
              </button>

              <button id="view-projects" className="about-projects-btn">
                View Projects
              </button>
            </div>
          </div>

          <div className="about-img">
            <img src="src/assets/images/about-img.jpg" alt="" />
          </div>
        </div>

        <section id="about-portfolio">
          <div id="portfolio-btns" className="about-stats">
            <div className="stats active" data-tab="projects">
              <img src="src/assets/icons/project.svg" alt="projects" />
              <h2>8</h2>
              <h3>TOTAL PROJECTS</h3>
              <p>innovative solutions</p>
            </div>

            <div className="stats" data-tab="certificates">
              <img src="src/assets/icons/certificates.svg" alt="skills" />
              <h2>12</h2>
              <h3>CERTIFICATES</h3>
              <p>Professional skills validated</p>
            </div>

            <div className="stats" data-tab="tech-stack">
              <img src="src/assets/icons/experience.svg" alt="experience" />
              <h2>3</h2>
              <h3>YEARS OF EXPERIENCE</h3>
              <p>Continuous learning journey</p>
            </div>
          </div>
        </section>

        <section
          id="portfolio-showcase-result"
          className="portfolio-showcase-result"
        >
          <div id="cards-container" className="portfolio-showcase-cards"></div>
          <button id="load-more-btn" className="load-more-btn">
            Show More
          </button>
        </section>
      </main>

      <section className="contact">
        <div className="contact-title">
          <h1>Contact Me</h1>

          <p>Have something to discuss? Send me a message and let's talk</p>
        </div>

        <div id="contact" className="contact-contents">
          <h2>Get in Touch</h2>
          <p id="aboutEnteredText">Got a question? Send me a message!</p>
          <hr />
          <form className="contact-form">
            <div className="form-contents">
              <i className="fa-solid fa-user form-icon"></i>
              <input
                id="aboutUserInput"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-contents">
              <i className="fa-solid fa-envelope form-icon"></i>
              <input
                id="aboutUserEmailInput"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-contents">
              <i className="fa-solid fa-message msg-icon"></i>
              <textarea
                placeholder="Your Message"
                rows="5"
                cols="50"
                required
                id="aboutUserMessageInput">
              </textarea>
            </div>

            <button className="form-btn" type="submit" id="click">
              <i className="fa-solid fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer>
        <hr className="copy-right-hr" />
        <div className="copy-right">&copy;All Rights Reserved.</div>
      </footer>
    </>
  );
}

export default Home
