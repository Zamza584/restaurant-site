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

        const sections = gsap.utils.toArray(".section");
        sections.forEach((section) => {
            gsap.fromTo(section, {
                x: -150,
                opacity: 0,
            }, {
                scrollTrigger: {
                    trigger: section, 
                    toggleActions: "restart none none none",
                    start: "top bottom",
                },
                duration: 1.2,
                ease: "expo.easeOut",
                x: 0,
                opacity: 1
            })
        })

    })



}


