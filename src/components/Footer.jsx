import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Newton Kipkurui Kimutai</h3>
        <p>
          I am a passionate software developer with a solid foundation in both front-end and back-end development. 
          I am excited to contribute my skills to building impactful software solutions. Looking forward to working with you soon.
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/newton-mutai-79a87a243/" className="linkedin" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/MutaiNewton56" className="github" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
          <a href="mailto:mutainewton56@gmail.com" className="email" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-envelope"></i>
          </a>
        </div>
        <div className="contact-info">
          <p>
            <strong>Phone:</strong> +254 743 604 267
            <br />
            <strong>Email:</strong> mutainewton56@gmail.com
            <br />
            <strong>Location:</strong> Nakuru, Kenya
          </p>
        </div>
        <div className="copyright">
          &copy; Copyright <strong><span>MyPortfolio</span></strong>. All Rights Reserved.
        </div>
        <div className="credits">
          Designed by <a href="#">Newton Kipkurui Kimutai</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
