import React from "react";
import "./style.css";

export default function Navbar() {
  return (
    <ul>
      <li class="header-secondary-nav-logo">
        <a
          target="_self"
          title="Home"
          aria-label="Complex"
          className="header-secondary-nav__logo"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 776.692 200"
            width="127px"
            height="33px"
            fill="#000"
            role="img"
            aria-labelledby="complex-main-logo"
            title="Complex"
          >
            <title id="complex-main-logo">Complex logo light</title>
            <path d="M104.67 198.318H43.262C14.942 198.318 0 177.305 0 145.32V54.768C0 22.798 6.78 0 47.724 0h15.648c28.893 0 41.498 22.83 41.498 55.082V72.9H57.76V44.064c0-2.524-2.128-4.808-4.653-4.808h-.58c-2.523 0-4.855 2.283-4.855 4.808v108.563c0 3.088 2.625 5.03 5.15 5.03h51.23l.617 40.66zM371.764 2.035v196.283h-47.11V109.59l-10.796 88.728H282.25l-11.59-88.728v88.728h-46.95l-.158-196.283h62.404l11.7 88.783L309.23 2.035h62.536zm118.824 0h47.67V157.66h32.806v40.658H490.59V2.035zm285.54 0L750.9 96.81l25.793 101.51h-49.348l-8.973-50.474-10.38 50.473h-42.9l25.8-94.78L665.654 2.03h49.352l8.13 49.63L733.23 2.03h42.9zM157.38 44.982v110.052c0 2.972 2.41 5.38 5.645 5.38a5.38 5.38 0 0 0 5.38-5.38V44.982c0-2.973-2.41-5.385-5.642-5.385a5.387 5.387 0 0 0-5.383 5.385zm58.854 112.957c0 28.315-13.744 42.06-42.066 42.06h-22.434c-28.318 0-42.057-13.74-42.057-42.06V42.41c0-28.32 13.736-42.06 42.057-42.06h22.434c28.322 0 42.064 13.738 42.064 42.06l.002 115.527zM427.248 39.87v46.49l4.945.025c2.732 0 4.943-2.405 4.943-5.38V45.253c0-2.97-2.21-5.38-4.943-5.38h-4.945zm.162 81.94v76.505h-47.67V2.035h62.25c28.32 0 42.062 13.738 42.062 42.058v35.66c0 28.322-13.742 42.06-42.062 42.06h-14.58zM576.417 1.495h84.22v40.708h-36.495v35.932h35.098v40.708h-35.098v38.46h37.06v40.708h-84.784V1.5z"></path>
          </svg>
        </a>
      </li>
      <div className="navLinks">
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#shop">Shop</a>
        </li>
        <li>
          <a href="#sports">Sports</a>
        </li>
        <li>
          <a href="#about">Contact</a>
        </li>
      </div>
      <div>
        <a
          id="splashy-search-button"
          className="splashy-search-icon__button"
          href="#search"
          data-gtm-module="search"
          data-gtm-module-location="header"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width="18px"
            height="18px"
            fill="#000"
            role="img"
            aria-labelledby="splashy-search-icon"
          >
            <title id="splashy-search-icon">splashy search icon</title>
            <path d="M195.6 173.75l-41.3-41.3c9.4-13.6 14.9-30.1 14.9-47.9 0-46.7-37.9-84.6-84.6-84.6C37.9-.05 0 37.85 0 84.55s37.9 84.6 84.6 84.6c17.8 0 34.3-5.5 47.9-14.9l41.3 41.2c2.9 3 6.5 4.6 10.8 4.6 4.2 0 7.8-1.5 10.8-4.6 3-3 4.6-6.7 4.6-10.8 0-4.3-1.5-7.9-4.4-10.9zm-111-35.3c-29.7 0-53.8-24.1-53.8-53.8 0-29.7 24.1-53.8 53.8-53.8 29.7 0 53.8 24.1 53.8 53.8.1 29.7-24 53.8-53.8 53.8z"></path>
          </svg>
        </a>
        <a
          class="gtm-social-ext"
          href="https://www.facebook.com/complex"
          rel="noopener noreferrer"
          aria-label="Facebook Page"
          data-gtm-social-site="Facebook"
          data-gtm-url="https://www.facebook.com/complex"
          target="_blank"
          data-gtm-module="outbound link"
          data-gtm-module-location="navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 19 19"
            role="img"
            aria-labelledby="facebook-logo-navigation"
            class="icon-facebook"
          >
            <title id="facebook-logo-navigation">Facebook logo</title>
            <path
              fill="#000"
              d="M19 9.5C19 4.253 14.747 0 9.5 0S0 4.253 0 9.5c0 4.742 3.474 8.672 8.016 9.385v-6.639H5.604V9.5h2.412V7.407c0-2.38 1.418-3.696 3.588-3.696 1.04 0 2.126.185 2.126.185v2.338h-1.197c-1.18 0-1.549.733-1.549 1.484V9.5h2.635l-.421 2.746h-2.214v6.639C15.526 18.172 19 14.242 19 9.5"
            ></path>
            <path
              fill="#FFF"
              d="M13.198 12.246l.421-2.746h-2.635V7.718c0-.751.368-1.484 1.549-1.484h1.197V3.896s-1.087-.185-2.126-.185c-2.17 0-3.588 1.315-3.588 3.696V9.5H5.604v2.746h2.412v6.639c.483.075.979.115 1.484.115s1-.04 1.484-.115v-6.639h2.214"
            ></path>
          </svg>
        </a>
        <a
          class="gtm-social-ext"
          href="https://twitter.com/Complex"
          rel="noopener noreferrer"
          aria-label="Twitter Page"
          data-gtm-social-site="Twitter"
          data-gtm-url="https://twitter.com/Complex"
          target="_blank"
          data-gtm-module="outbound link"
          data-gtm-module-location="navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width="20px"
            height="20px"
            fill="#000"
            role="img"
            aria-labelledby="twitter-logo-navigation"
            class="icon-twitter"
          >
            <title id="twitter-logo-navigation">twitter logo navigation</title>
            <path d="M200 38.1c-7.9 3.4-15.7 5.5-23.6 6.3 8.9-5.3 14.9-12.9 18-22.6-8.1 4.8-16.8 8.1-26 9.9-8.1-8.6-18.1-12.9-29.9-12.9-11.3 0-21 4-29 12s-12 17.7-12 29c0 3 .3 6.2 1 9.4-16.8-.9-32.5-5.1-47.2-12.7C36.7 49 24.2 38.9 14 26.3 10.2 32.6 8.4 39.5 8.4 47c0 7 1.6 13.5 4.9 19.5 3.3 6 7.7 10.9 13.3 14.6-6.6-.3-12.8-2-18.5-5.2v.5c0 9.9 3.1 18.6 9.3 26.1 6.2 7.5 14.1 12.2 23.5 14.2-3.6.9-7.1 1.4-10.8 1.4-2.4 0-5-.2-7.7-.6 2.6 8.2 7.4 15 14.5 20.2 7 5.3 15 8 23.9 8.2-14.9 11.7-31.9 17.5-50.9 17.5-3.6 0-6.9-.2-9.9-.5 19 12.3 40 18.4 62.9 18.4 14.6 0 28.2-2.3 41-6.9 12.8-4.6 23.7-10.8 32.7-18.5 9.1-7.7 16.9-16.6 23.4-26.7a121.6 121.6 0 0 0 14.7-31.5c3.2-11 4.8-21.9 4.8-32.9 0-2.4 0-4.1-.1-5.3 8.1-6.1 14.9-13.1 20.6-21.4z"></path>
          </svg>
        </a>
        <a
          class="gtm-social-ext"
          href="https://www.youtube.com/complex"
          rel="noopener noreferrer"
          aria-label="Youtube Channel"
          data-gtm-social-site="Youtube"
          data-gtm-url="https://www.youtube.com/complex"
          target="_blank"
          data-gtm-module="outbound link"
          data-gtm-module-location="navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width="20px"
            height="20px"
            fill="#000"
            role="img"
            aria-labelledby="youtube-logo-navigation"
            class="icon-youtube"
          >
            <title id="youtube-logo-navigation">youtube logo navigation</title>
            <path d="M198 60.02s-1.96-13.8-7.96-19.84c-7.6-7.96-16.12-8-20.04-8.48-28-2.04-69.96-2.04-69.96-2.04h-.08s-42 0-69.96 2.04c-3.92.48-12.44.522-20.04 8.48C3.96 46.26 2 60.02 2 60.02s-2 16.2-2 32.4v15.16c0 16.2 2 32.36 2 32.36s1.96 13.8 7.96 19.84c7.6 7.96 17.6 7.72 22.04 8.56 16 1.52 68 2 68 2s42.04-.08 70-2.08c3.92-.48 12.44-.52 20.04-8.48 6-6.08 7.96-19.84 7.96-19.84s2-16.2 2-32.36V92.42c0-16.2-2-32.4-2-32.4zM79.36 125.98v-56.2l54.04 28.2-54.04 28z"></path>
          </svg>
        </a>
      </div>
    </ul>
  );
}
