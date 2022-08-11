import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>Location: </h6>
              <p className="text-justify">
                229 WEST 43RD STREET 10TH FLOOR NEW YORK,NY 10036
              </p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>VISIT</h6>
              <ul className="footer-links">
                <li>
                  <a href="*">SHOP@COMPLEX.COM</a>
                </li>
                <li>
                  <a href="/">COMPLEX.COM</a>
                </li>
                <li>
                  <a href="*">SPORTS@COMPLEX.COM</a>
                </li>
                <li>
                  <a href="*">CONTACT@COMPLEX.COM</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by{" "}
                <a href="#">
                  <b>COMPLEX</b>
                </a>
                .
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a
                    className="facebook"
                    target={"__blank"}
                    href="https://www.facebook.com/complex"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a
                    className="twitter"
                    target={"__blank"}
                    href="https://twitter.com/Complex"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a
                    className="instagram"
                    target={"__blank"}
                    href="https://www.instagram.com/complex/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a
                    className="youtube"
                    target={"__blank"}
                    href="https://www.youtube.com/complex"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
