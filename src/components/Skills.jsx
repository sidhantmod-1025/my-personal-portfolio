import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Learning server-side development and APIs.",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    number: "03",
    title: "Programming",
    description:
      "Developing programming fundamentals and problem-solving.",
    skills: ["Python", "C", "C++ Basics"],
  },
  {
    number: "04",
    title: "AI & Generative AI",
    description:
      "Exploring LLMs and AI-powered applications.",
    skills: ["LLMs", "Prompt Engineering", "Groq API"],
  },
];

function Skills() {
  const skillsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section label animation
      gsap.from(".skills-label", {
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 85%",
          once: true,
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Heading animation
      gsap.from(".skills-heading-row > div:first-child", {
        scrollTrigger: {
          trigger: ".skills-heading-row",
          start: "top 85%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Code decoration animation
      gsap.from(".skills-decoration", {
        scrollTrigger: {
          trigger: ".skills-heading-row",
          start: "top 85%",
          once: true,
        },
        rotate: -30,
        scale: 0.6,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Skill cards appear one by one
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 85%",
          once: true,
        },
        y: 55,
        opacity: 0,
        scale: 0.94,
        duration: 0.8,
        stagger: 0.16,
        ease: "power3.out",
      });

      // Skill tags animation
      gsap.from(".skill-tag", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
          once: true,
        },
        y: 12,
        opacity: 0,
        duration: 0.45,
        stagger: 0.035,
        delay: 0.3,
        ease: "power2.out",
      });

      // Bottom note animation
      gsap.from(".skills-note", {
        scrollTrigger: {
          trigger: ".skills-note",
          start: "top 95%",
          once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Subtle decoration movement
      gsap.to(".skills-decoration", {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Gentle glow animation on the note dot
      gsap.to(".skills-note-dot", {
        scale: 1.5,
        opacity: 0.65,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="skills-section"
      id="skills"
      ref={skillsRef}
    >
      <div className="skills-container">

        <div className="skills-label">
          <span>02</span> — MY TOOLKIT
        </div>

        <div className="skills-content">

          <div className="skills-heading-row">
            <div>
              <h2>
                Technologies I use
                <br />
                <span>to build and learn.</span>
              </h2>

              <p className="skills-intro">
                My toolkit is growing with every project.
                Here are the technologies I'm working with
                and exploring on my development journey.
              </p>
            </div>

            <div className="skills-decoration">
              &lt;/&gt;
            </div>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article
                className="skill-card"
                key={group.number}
              >
                <div className="skill-card-top">
                  <span className="skill-number">
                    {group.number}
                  </span>

                  <span className="skill-arrow">
                    ↗
                  </span>
                </div>

                <h3>{group.title}</h3>

                <p>{group.description}</p>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span
                      className="skill-tag"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="skills-note">
            <span className="skills-note-dot"></span>

            Always learning. Always building. Always improving.
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;