import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./Navbar.css";

function Navbar() {
  const navbarRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".navbar-logo", {
        y: -20,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          ".navbar-links a",
          {
            y: -15,
            opacity: 0,
            stagger: 0.12,
            duration: 0.5,
          },
          "-=0.35"
        )
        .from(
          ".navbar-button",
          {
            x: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        );

      // Logo hover animation
      gsap.to(".navbar-logo span", {
        color: "#8b5cf6",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, navbarRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <a href="#home" className="navbar-logo">
        SK<span>.</span>
      </a>

      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#journey">Journey</a>
      </div>

      <a href="#contact" className="navbar-button">
        Let's Talk <span>↗</span>
      </a>
    </nav>
  );
}

export default Navbar;