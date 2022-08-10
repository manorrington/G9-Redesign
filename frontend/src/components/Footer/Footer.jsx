import React from "react";
import "./style.css";


export default function Footer() {
  return (
    <>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>Location: </h6>
              <p class="text-justify">
                229 WEST 43RD STREET 10TH FLOOR NEW YORK,NY 10036
              </p>
            </div>
            <div class="col-xs-6 col-md-3">
              <h6>VISIT</h6>
              <ul class="footer-links">
                <li>
                  <a href="*">SHOP@COMPLEX.COM</a>
                </li>
                <li>
                  <a href="/">COMPLEX.COM</a>
                </li>
                <li>
                  <a href="*">
                    SPORTS@COMPLEX.COM
                  </a>
                </li>
                <li>
                  <a href="*">
                    CONTACT@COMPLEX.COM
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by{" "}
                <a href="#">
                  <b>COMPLEX</b>
                </a>
                .
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a class="facebook" href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="#">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="#">
                    <i class="fa fa-linkedin"></i>
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
