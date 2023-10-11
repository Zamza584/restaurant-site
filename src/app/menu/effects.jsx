"use client"

import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Effects() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(".menu-header", {
            y: -30,
            opacity: 0.1,
        }, {
            ease: "expo.easeOut",
            duration: 2,
            y: 0,
            opacity: 1
        })
        gsap.fromTo(".main-menu", {
            x: -150,
            opacity: 0,
        }, {
            scrollTrigger: ".main-menu",
            ease: "expo.easeOut",
            duration: 2,
            x: 0,
            opacity: 1
        })
        gsap.fromTo(".breakfast-menu", {
            x: -150,
            opacity: 0,
        }, {
            scrollTrigger: ".breakfast-menu",
            ease: "expo.easeOut",
            duration: 2,
            x: 0,
            opacity: 1
        })
    })



}


