
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // Section Label Animation
      gsap.from(".about-label-text", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 85%",
          once: true,
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Profile Photo Animation
      gsap.from(".about-profile", {
        scrollTrigger: {
          trigger: ".about-profile",
          start: "top 85%",
          once: true,
        },
        y: 40,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
      });

      // Heading Animation
      gsap.from(".about-heading", {
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 85%",
          once: true,
        },
        y: 45,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Description Animation
      gsap.from(".about-description p", {
        scrollTrigger: {
          trigger: ".about-description",
          start: "top 85%",
          once: true,
        },
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.18,
        ease: "power2.out",
      });

      // Highlight Cards Animation
      gsap.from(".about-highlight", {
        scrollTrigger: {
          trigger: ".about-highlights",
          start: "top 85%",
          once: true,
        },
        y: 45,
        opacity: 0,
        scale: 0.94,
        duration: 0.7,
        stagger: 0.16,
        ease: "power3.out",
      });

      // Education Card Animation
      gsap.from(".about-education", {
        scrollTrigger: {
          trigger: ".about-education",
          start: "top 90%",
          once: true,
        },
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Highlight Icons Floating Animation
      gsap.to(".highlight-icon", {
        y: -4,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "sine.inOut",
      });

      // Education Icon Animation
      gsap.to(".education-icon", {
        rotate: 5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, aboutRef);

    return () => ctx.revert();

  }, []);

  return (
    <section
      className="about-section"
      id="about"
      ref={aboutRef}
    >
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-label">

          <div className="about-label-text">
            <span>01</span> — ABOUT ME
          </div>

          {/* PROFILE PHOTO */}
          <div className="about-profile">

            <div className="about-photo-wrap">
              <img
                src={`${import.meta.env.BASE_URL}sidPic.png`}
                alt="Sidhant Kumar"
                className="profile-image"
              />
            </div>

            <div className="photo-caption">
              <span>HELLO, I'M</span>
              <h3>Sidhant Kumar</h3>
              <p>Developer · AI Explorer</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="about-content">

          {/* HEADING */}
          <h2 className="about-heading">
            Not just writing code.
            <br />
            <span>Creating possibilities.</span>
          </h2>

          {/* DESCRIPTION */}
          <div className="about-description">

            <p>
              Hey, I'm Sidhant Kumar, a BCA student and aspiring
              full-stack developer from India. I enjoy turning
              ideas into practical digital experiences.
            </p>

            <p>
              My journey started with web development. Since then,
              I've been exploring JavaScript, React, Node.js,
              Python, and Generative AI to understand how technology
              can solve real-world problems.
            </p>

            <p>
              I'm still learning, experimenting, and building.
              Every project helps me become a better developer
              and a better problem solver.
            </p>

          </div>

          {/* HIGHLIGHT CARDS */}
          <div className="about-highlights">

            <div className="about-highlight">
              <span className="highlight-icon">⌘</span>

              <div>
                <h3>Developer Mindset</h3>
                <p>Learn by building real projects.</p>
              </div>
            </div>

            <div className="about-highlight">
              <span className="highlight-icon">✳</span>

              <div>
                <h3>AI Enthusiast</h3>
                <p>
                  Exploring LLMs and AI-powered applications.
                </p>
              </div>
            </div>

            <div className="about-highlight">
              <span className="highlight-icon">↗</span>

              <div>
                <h3>Always Growing</h3>
                <p>
                  Improving skills through practice and projects.
                </p>
              </div>
            </div>

          </div>

          {/* EDUCATION CARD */}
          <div className="about-education">

            <div className="education-icon">🎓</div>

            <div className="education-content">

              <span className="education-label">
                CURRENTLY PURSUING
              </span>

              <h3>Bachelor of Computer Applications</h3>

              <p>Pt. JLN Government College, Faridabad</p>

              <span className="education-year">
                BCA · SECOND YEAR
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;

