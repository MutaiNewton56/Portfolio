export default function Hero() {
    return (
      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <h1>Newton Kipkurui</h1>
          <p>
            I'm a{" Software Developer "}
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Quantity Surveyor, Trader, Drummer"
            ></span>
          </p>
          <div className="social-links">
            <a href="https://www.twitter.com" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.facebook.com" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.instagram.com" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.google.com" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="https://www.linkedin.com" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    );
  }
  