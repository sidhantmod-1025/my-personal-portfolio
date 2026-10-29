import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);
  const visualRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .from(".hero-badge", {
          y: 25,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".hero-content h1",
          {
            y: 45,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.35"
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.45"
        )
        .from(
          ".hero-actions a",
          {
            y: 20,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".hero-meta span",
          {
            opacity: 0,
            y: 12,
            stagger: 0.12,
            duration: 0.5,
          },
          "-=0.25"
        )
        .from(
          ".hero-card",
          {
            opacity: 0,
            scale: 0.88,
            rotateY: -12,
            duration: 1,
          },
          "-=1.1"
        )
        .from(
          ".hero-floating-tag",
          {
            opacity: 0,
            scale: 0.7,
            stagger: 0.2,
            duration: 0.6,
          },
          "-=0.5"
        );

      // Floating card animation
      gsap.to(".hero-card", {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Orbit animations
      gsap.to(".hero-orbit-one", {
        rotation: 335,
        duration: 22,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero-orbit-two", {
        rotation: 385,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      // Floating technology tags
      gsap.to(".hero-tag-one", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-tag-two", {
        y: 10,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Glowing background
      gsap.to(".hero-glow", {
        scale: 1.2,
        opacity: 0.7,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (event) => {
    if (
      !visualRef.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const rect = visualRef.current.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    gsap.to(".hero-card", {
      rotateY: x * 12,
      rotateX: -y * 12,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(".hero-card", {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-status-dot"></span>
            BCA STUDENT · DEVELOPER · AI EXPLORER
          </div>

          <h1>
            Turning ideas
            <br />
            into <span>digital</span>
            <br />
            experiences.
          </h1>

          <p className="hero-description">
            Hey, I'm Sidhant Kumar — a developer who loves
            building useful web experiences and exploring
            the world of Artificial Intelligence.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-primary-btn">
              Explore My Work <span>↗</span>
            </a>

            <a href="#about" className="hero-secondary-btn">
              More About Me ↓
            </a>
          </div>

          <div className="hero-meta">
            <span>BASED IN INDIA 🇮🇳</span>
            <span>BUILDING MY NEXT CHAPTER ↗</span>
          </div>
        </div>

        {/* Right Visual */}
        <div
          className="hero-visual"
          ref={visualRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="hero-orbit hero-orbit-one"></div>
          <div className="hero-orbit hero-orbit-two"></div>

          <div className="hero-glow"></div>

          <div className="hero-card">
            <div className="hero-card-top">
              <span>MY DIGITAL WORLD</span>
              <span className="hero-card-indicator">● ONLINE</span>
            </div>

            <div className="hero-code-symbol">{"</>"}</div>

            <h2>Code. Create. Evolve.</h2>

            <p>
              Exploring technology.
              <br />
              Building real projects.
              <br />
              Learning something new.
            </p>

            <div className="hero-card-bottom">
              <span>FULL STACK DEVELOPMENT</span>
              <span>✳</span>
            </div>
          </div>

          <div className="hero-floating-tag hero-tag-one">
            React.js
          </div>

          <div className="hero-floating-tag hero-tag-two">
            AI + Code ✦
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;