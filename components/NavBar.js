import React from "react";
import Link from "next/link";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/ImageGallery">
          <a>Image Gallery</a>
        </Link>
      </li>
      <li>
        <Link href="/testpage">
          <a>Test Page</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
      Helvetica, sans-serif;
      }
      nav {
      text-align: center;
      background-color: silver;
      padding: 1px;
      font-weight: 900;
      }
      ul {
        display: flex;
      }
      nav > ul {
        padding: 2px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: black;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
);

export default Nav;
