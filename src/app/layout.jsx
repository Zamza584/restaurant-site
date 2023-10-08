"use client";

import "./globals.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Link from "next/link";

export default function RootLayout({ children }) {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  useEffect(() => {
    gsap.fromTo(
      ".show",
      {
        x: 1000,
      },
      {
        duration: 1,
        x: 0,
        display: "flex",
        ease: "circ ",
      }
    );
    gsap.fromTo(
      ".hide",
      {
        x: 0,
      },
      {
        duration: 1,
        x: 1500,
        ease: "power1",
        display: "none",
      }
    );

    gsap.fromTo(
      ".ham-icon",
      {
        duration: 2,
        opacity: 0,
        scale: 0.2,
        ease: "power1",
      },
      {
        scale: 1,
        opacity: 1,
      }
    );
    let navItem = document.querySelectorAll(".nav-item")

    navItem.forEach((navItem) => {
      navItem.addEventListener("click", (e) => {
        handleClick();
      })
    })

  });

  return (
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <header>
          <nav>
            <div><a href="/">Restaurante</a></div>
            <i className={toggle ? "ham-icon close" : "ham-icon"} onClick={handleClick}>
              {toggle ? (
                <GrClose />
              ) : (
                <RxHamburgerMenu />
              )}
            </i>

            <ul className={toggle ? "nav-items show" : "nav-items hide"}>
              <li><Link href="/" className="nav-item">Home</Link></li>
              <li>
                <Link href="/menu" className="nav-item">
                  Explore Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="nav-item">
                  About
                </Link>
              </li>
              <li>
                <Link href="" className="nav-item">
                  Order Now
                </Link>
              </li>
              <li>
                <Link href="" className="nav-item">
                  Location
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>

        <footer>
          <ul className="footer-items">
            <li>
              <i><a href="#"><BsInstagram /></a></i>
              <i><a href="#"><BsFacebook /></a></i>
            </li>
            <li><a href="#">location</a></li>
            <li><a href="#">check menu</a></li>
            <li><p>@Manuel Zamalloa</p></li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
