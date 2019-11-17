import React from 'react';

const Footer = () => (
  <div>
    <footer className="footer">
      <center>
        <div className="footer-copyright">© 2015 - 2019 mildronize.com </div>
        <div className="footer-info">
         <a href="https://github.com/mildronize/next-wp-headless">V 4.0.0</a> Built with ❤ by Thada Wangthammang
         </div>

        <div className="footer-footer-user-links">
          <a
            className="footer-user-link"
            href="https://github.com/mildronize"
            aria-label="My Github"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="footer-user-link"
            href="https://twitter.com/mildronize"
            aria-label="My Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="footer-user-link"
            href="https://www.linkedin.com/in/thada-wangthammang-281894a6"
            aria-label="My Linkedin"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="footer-user-link"
            href="mailto:thada.w@psu.ac.th"
            aria-label="My Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            className="footer-user-link"
            href="https://medium.com/@mildronize"
            aria-label="My Medium"
          >
            <i className="fab fa-medium"></i>
          </a>
        </div>
      </center>
    </footer>


  </div>
);

export default Footer;
