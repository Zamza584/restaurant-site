"use client"

import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Animations() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(".hero-image", {
            y: -30,
            opacity: 0.1,
        }, {
            ease: "expo.easeOut",
            duration: 2,
            y: 0,
            opacity: 1
        })
    
    })

}