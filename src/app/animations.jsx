"use client"

import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Animations() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const sections = gsap.utils.toArray(".section")

        gsap.fromTo(".hero-image", {
            y: -30,
            opacity: 0.1,
        }, {
            ease: "expo.easeOut",
            duration: 2,
            y: 0,
            opacity: 1
        })
        
        sections.forEach(section => {
            gsap.fromTo(section, {
                y:-100, 
                opacity: 0.5,
            }, {
                scrollTrigger: {
                    trigger: section,
                    toggleActions: "restart none none none"
                },
                y: 0,
                duration: 2,
                ease: "expo.easeOut",
                opacity: 1
            })
        })

    })
}