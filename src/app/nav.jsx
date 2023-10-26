"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { gsap } from "gsap";
import Link from "next/link";
import React, { useState, useEffect } from "react";



export default function Nav() {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => window.innerWidth < 700 ? setToggle(!toggle) : setToggle(false);

    useEffect(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 700px)", () => {
            gsap.fromTo(
                ".show",
                {
                    x: 0,
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
                    x: 0,
                    ease: "power1",
                    display: "flex",
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
                    display: "none",
                    opacity: 1,
                }
            );
        })

        mm.add("(max-width: 700px)", () => {
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
                    display: "flex", 
                    opacity: 1,
                }
            );
        })


        const body = document.querySelector("body");
        if (toggle === true && window.innerWidth < 700) {
            body.style.overflowY = "hidden"
            
        } else {
            body.style.overflowY = "scroll"
        }
    
    });

    return (
        <nav>
            <div><a href="/">Restaurante</a></div>
            <i className={toggle ? "ham-icon close" : "ham-icon"} onClick={handleClick}>
                {toggle ? (
                    <GrClose />
                ) : (
                    <RxHamburgerMenu />
                )}
            </i>

            <ul className={ toggle ? "nav-items show" : "nav-items hide"}>
                <NavItem url="/" handleClick={handleClick}>Home</NavItem>
                <NavItem url="/menu" handleClick={handleClick}>Explore Menu</NavItem>
                <NavItem url="/about" handleClick={handleClick}>About</NavItem>
                <NavItem url="/orders" handleClick={handleClick}>Order Now</NavItem>
                <NavItem url="/location" handleClick={handleClick}>Location</NavItem>
            </ul>
            

        </nav>

    )
}

function NavItem({ url, handleClick, children }) {
    return (
        <li>
            <Link href={url} className="nav-item" onClick={handleClick}>
                {children}
            </Link>
        </li>
    )
}