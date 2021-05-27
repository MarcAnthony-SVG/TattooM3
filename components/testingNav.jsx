import React from 'react';
import Link from 'next/link';
const navBar = `bg-gray-400 text-center p-2 font-black text-lg`;
const lists = "flex p-2"
const link_Btn = `bg-gray-500 transition duration-150 border border-black p-px rounded relative -top-2.5 text-black`;
const hover = 'hover:bg-gray-600 hover:text-white';
const Nav = () => (
  <header class="">
    <nav class={`bg-blue-500`  }>
      <ul class="flex p-2">
        <li class="flex p-2">
          <Link href="/">
            <a class={link_Btn + hover}>Home</a>
          </Link>
        </li>
        <li class="sm: block no-underline md:flex p-2">
          <Link href="/About">
            <a class={link_Btn + hover}>About</a>
          </Link>
        </li>
        <li class="sm: block md:flex p-2">
          <Link href="/ImageGallery">
            <a class={link_Btn + hover}>Image Gallery</a>
          </Link>
        </li>
        <li class={lists}>
          <Link href="/Support">
            <a class={link_Btn + hover}>Support</a>
          </Link>
        </li>
      </ul>

      {/* //     <style jsx>{`
//       :global(body) {
//         margin: 0;
//         font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
//           Helvetica, sans-serif;
//       }
//       nav {
//         text-align: center;
//         background-color: silver;
//         padding: 1px;
//         font-weight: 900;
//       }
//       ul {
//         display: flex;
//       }
//       nav > ul {
//         padding: 2px;
//       }
//       li {
//         display: flex;
//         padding: 6px 8px;
//       }
//       a {
//         color: black;
//         text-decoration: none;
//         font-size: 13px;
//       }
//     `}</style> */}
    </nav>
  </header>
);

export default Nav;
