import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Newton Kipkurui</h3>
        <p>
          I am glad that you have seen my education progress, am ready to work.
          Hoping to be hearing from you soon.
        </p>
        <div className="social-links">
          <a href="https://www.twitter.com" className="twitter" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://www.facebook.com" className="facebook" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.instagram.com" className="instagram" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.google.com" className="google-plus" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-skype"></i>
          </a>
          <a href="https://www.linkedin.com" className="linkedin" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <div className="copyright">
          &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">Kirui Corp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
