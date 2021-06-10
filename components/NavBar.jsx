import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <header>
    <nav>
      <ul class={phone_ui + desktop_ui}>
        <li class={phone_li + desktop_li}>
          <Link href="/">
            <a class={desktop_btn}>Home</a>
          </Link>
        </li>
        <li class={phone_li + desktop_li}>
          <Link href="/About">
            <a class={desktop_btn}>About</a>
          </Link>
        </li>
        <li class={phone_li + desktop_li}>
          <Link href="/ImageGallery">
            <a class={desktop_btn}>Image Gallery</a>
          </Link>
        </li>
        {/* <li class={phone_li + desktop_li}>
          <Link href="/Support">
            <a class={desktop_btn}>Support</a>
          </Link>
        </li> */}
      </ul>
    </nav>
  </header>
);
const phone_ui = 'list-none m-0 w-full p-0 bg-red-500';
const phone_li = 'block py-0.5	bg-gray-300 border border-gray-400 ';
const desktop_li =
  ' lg:flex lg:p-1.5 lg:bg-gray-300 lg:border lg:border-gray-300 lg:items-center';
const desktop_ui = ' lg:flex lg:bg-gray-300';
const desktop_btn =
  ' lg:bg-gray-400 lg:transition duration-150 lg:border lg:border-black lg:p-px lg:rounded lg:relative lg:items-center lg:text-black lg:hover:bg-gray-600 lg:hover:text-white';

export default Nav;
