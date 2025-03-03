import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const links = document.querySelectorAll(".nav-link");
      links.forEach((link) => {
        const section = document.querySelector(link.getAttribute("href"));
        if (
          section &&
          window.scrollY >= section.offsetTop - 50 &&
          window.scrollY < section.offsetTop + section.offsetHeight
        ) {
          links.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className="d-flex flex-column justify-content-center">
      <nav id="navbar" className="navbar nav-menu">
        <ul>
          <li>
            <a href="#hero" className="nav-link scrollto active">
              <i className="bx bx-home"></i> <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link scrollto">
              <i className="bx bx-user"></i> <span>About</span>
            </a>
          </li>
          <li>
            <a href="#resume" className="nav-link scrollto">
              <i className="bx bx-file-blank"></i> <span>Resume</span>
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link scrollto">
              <i className="bx bx-server"></i> <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link scrollto">
              <i className="bx bx-envelope"></i> <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
