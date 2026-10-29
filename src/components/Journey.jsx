import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Journey.css";

gsap.registerPlugin(ScrollTrigger);

const journeyItems = [
  {
    year: "2024 — PRESENT",
    number: "01",
    title: "Bachelor of Computer Applications",
    place: "Pt. JLN Government College, Faridabad",
    description:
      "Building a strong foundation in computer science, programming, databases, and software development.",
    tags: ["BCA", "Computer Science"],
    current: true,
  },
  {
    year: "2025 — PRESENT",
    number: "02",
    title: "Frontend Development",
    place: "Learning by Building",
    description:
      "Learning HTML, CSS, JavaScript, and React while building responsive interfaces and practical web projects.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    current: false,
  },
  {
    year: "2026",
    number: "03",
    title: "Exploring Artificial Intelligence",
    place: "Generative AI & LLMs",
    description:
      "Exploring Python, large language models, prompt engineering, and AI-powered applications such as my AI Study Buddy.",
    tags: ["Python", "LLMs", "Groq API"],
    current: false,
  },
  {
    year: "NEXT CHAPTER",
    number: "04",
    title: "Full Stack AI Developer",
    place: "My Career Goal",
    description:
      "My goal is to build complete web applications that combine modern full-stack development with useful AI features.",
    tags: ["Full Stack", "AI Integration"],
    current: false,
  },
];

function Journey() {
  const journeyRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section label
      gsap.from(".journey-label", {
        scrollTrigger: {
          trigger: ".journey-section",
          start: "top 85%",
          once: true,
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Main heading
      gsap.from(".journey-heading h2", {
        scrollTrigger: {
          trigger: ".journey-heading",
          start: "top 85%",
          once: true,
        },
        y: 45,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Intro paragraph
      gsap.from(".journey-heading > p", {
        scrollTrigger: {
          trigger: ".journey-heading",
          start: "top 85%",
          once: true,
        },
        y: 25,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power2.out",
      });

      // Timeline line draws downward
      gsap.from(".journey-timeline::before", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".journey-timeline",
          start: "top 80%",
          once: true,
        },
      });

      // Timeline cards enter one by one
      gsap.from(".journey-item", {
        scrollTrigger: {
          trigger: ".journey-timeline",
          start: "top 80%",
          once: true,
        },
        x: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Timeline markers pop in
      gsap.from(".journey-marker", {
        scrollTrigger: {
          trigger: ".journey-timeline",
          start: "top 80%",
          once: true,
        },
        scale: 0.3,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        delay: 0.15,
        ease: "back.out(1.7)",
      });

      // Tags animate into view
      gsap.from(".journey-tags span", {
        scrollTrigger: {
          trigger: ".journey-timeline",
          start: "top 80%",
          once: true,
        },
        y: 12,
        opacity: 0,
        duration: 0.4,
        stagger: 0.04,
        delay: 0.4,
        ease: "power2.out",
      });

      // Footer message
      gsap.from(".journey-footer", {
        scrollTrigger: {
          trigger: ".journey-footer",
          start: "top 90%",
          once: true,
        },
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Gentle movement for the footer symbol
      gsap.to(".journey-footer-symbol", {
        rotate: 90,
        duration: 5,
        repeat: -1,
        ease: "none",
      });

      // Current marker glow
      gsap.to(".journey-item-current .journey-marker", {
        boxShadow: "0 0 30px rgba(56, 232, 255, 0.25)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, journeyRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="journey-section"
      id="journey"
      ref={journeyRef}
    >
      <div className="journey-container">

        <div className="journey-label">
          <span>04</span> — MY JOURNEY
        </div>

        <div className="journey-heading">
          <h2>
            Every step
            <br />
            <span>builds the future.</span>
          </h2>

          <p>
            I'm still learning, experimenting, and growing.
            This is the journey behind the developer I'm
            becoming.
          </p>
        </div>

        <div className="journey-timeline">
      
          {journeyItems.map((item) => (
            <article
              className={`journey-item ${
                item.current ? "journey-item-current" : ""
              }`}
              key={item.number}
              
            >
             
              
              <div className="journey-marker">
                <span>{item.number}</span>
              </div>

              <div className="journey-card">
                <div className="journey-card-top">
                  <span className="journey-year">
                    {item.year}
                  </span>

                  {item.current && (
                    <span className="journey-current-badge">
                      CURRENT
                    </span>
                  )}
                  
                </div>

                <h3>{item.title}</h3>

                <h4>{item.place}</h4>

                <p>{item.description}</p>

                <div className="journey-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
         
        </div>

        <div className="journey-footer">
          <span className="journey-footer-symbol">✳</span>

          <p>
            The goal isn't to know everything.
            It's to keep learning and build things that matter.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Journey;