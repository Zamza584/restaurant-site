"use client"

import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Animations() {
    useEffect(() => {
        gsap.fromTo(".hero-image", {
            y: -30,
            opacity: 0.1,
        }, {
       
            ease: "expo.easeOut",
            duration: 2,
            y: 0,
            opacity: 1
        })

        gsap.registerPlugin(ScrollTrigger)
        const sections = gsap.utils.toArray(".section");
        sections.forEach(section => {
            gsap.fromTo(section.children, {
                y:-100, 
                opacity: 0.5,
            }, {
                scrollTrigger: {
                    start: "top center",
                    toggleActions: "restart pause none pause",
                    trigger: section,
                },
                y: 0,
                duration: 2,
                ease: "expo.easeOut",
                opacity: 1
            })
        })

    })
}