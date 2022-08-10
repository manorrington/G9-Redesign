import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      {/* <label for="active" class="close"></label> */}
      <div className="wrapper">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sports</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <li className="header-secondary-nav-logo">
        <i>
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
        </i>
      </li>
      <div className="navLinks">
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">Sports</a>
        </li>
        <li>
          <a href="#about">Shop</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        
        <li>
          <a href="#search">&#x1F50E;&#xFE0E;</a>
        </li>
      </div>
    </nav>
  );
}
