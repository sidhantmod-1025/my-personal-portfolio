import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    category: "GENERATIVE AI · PYTHON",
    title: "AI Study Buddy",
    description:
      "An AI-powered study assistant that answers questions and helps students create topic notes using the Groq API.",
    technologies: ["Python", "Groq API", "LLM", "dotenv"],
    status: "AI PROJECT",
    link: "https://aistuddy-buddy-ngsfmmnbhaate5rumf5kzj.streamlit.app/",
  },
  {
    number: "02",
    category: "WEB DEVELOPMENT",
    title: "Seva Kendra Portal",
    description:
      "A government-service portal concept designed to organize services such as income, residence, caste, birth and death certificates.",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    status: "WEB PROJECT",
    link: "https://sidhantmod-1025.github.io/SevaKendra-Management-System/",
  },
  {
    number: "03",
    category: "FRONTEND DEVELOPMENT",
    title: "Student Portal",
    description:
      "A modern and responsive personal portfolio built with React, Vite, and CSS to showcase my skills, projects, education, and journey as a Full Stack Developer",
    technologies: ["React", "JavaScript", "CSS"],
    status: "WEB PROJECT",
    link: "https://sidhantmod-1025.github.io/Student-portal-/",
  },
   {
    number: "04",
    category: "FRONTEND DEVELOPMENT",
    title: "GYM Clone for Gym Lovers",
    description:
      "A student portal project featuring a registration form, dashboard flow, and email notifications using EmailJS.",
    technologies: ["React", "JavaScript", "CSS"],
    status: "WEB PROJECT",
    link: "https://sidhantmod-1025.github.io/gym_page/",
  },
  {
    number: "05",
    category: "FRONTEND DEVELOPMENT",
    title: "Birthday Special",
    description:
      "A Beautiful birethday special for our special person .",
    technologies: ["React", "JavaScript", "CSS"],
    status: "WEB PROJECT",
    link: "https://sidhantmod-1025.github.io/Birthday.html/",
  },

  {
    number: "06",
    category: "FRONTEND DEVELOPMENT",
    title: "Clone ",
    description:
      "A beautiful clone and lot off practice of javascript and other fronted developer tools .",
    technologies: ["React", "JavaScript", "CSS"],
    status: "WEB PROJECT",
    link: "https://sidhantmod-1025.github.io/clone-for-first/",
  },
  {
  number: "07",
  category: "PROGRAMMING LANGUAGE · C",
  title: "C Programming",
  description:
    "A collection of C programming questions, coding exercises, and practical problems to strengthen programming fundamentals.",
  technologies: ["C", "Programming", "Problem Solving"],
  status: "CODING PROJECT",
  link: "https://github.com/sidhantmod-1025/c-programming",
},

];

function Projects() {
  const projectsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section label animation
      gsap.from(".projects-label", {
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 85%",
          once: true,
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Heading animation
      gsap.from(".projects-heading > div", {
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 85%",
          once: true,
        },
        y: 45,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // GitHub button animation
      gsap.from(".github-link", {
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 85%",
          once: true,
        },
        x: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      // Project cards appear one by one
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
          once: true,
        },
        y: 65,
        opacity: 0,
        scale: 0.96,
        duration: 0.85,
        stagger: 0.18,
        ease: "power3.out",
      });

      // Technology tags appear smoothly
      gsap.from(".project-tech span", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          once: true,
        },
        y: 12,
        opacity: 0,
        duration: 0.4,
        stagger: 0.035,
        delay: 0.35,
        ease: "power2.out",
      });

      // Project numbers get a subtle entrance
      gsap.from(".project-card-top > span:first-child", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
          once: true,
        },
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        stagger: 0.18,
        delay: 0.25,
        ease: "back.out(1.7)",
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="projects-section"
      id="projects"
      ref={projectsRef}
    >
      <div className="projects-container">

        <div className="projects-label">
          <span>03</span> — SELECTED PROJECTS
        </div>

        <div className="projects-heading">
          <div>
            <h2>
              Ideas turned into
              <br />
              <span>real projects.</span>
            </h2>

            <p>
              A collection of things I'm building, learning,
              and experimenting with through code.
            </p>
          </div>

          <a
            href="https://github.com/sidhantmod-1025"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            Explore GitHub <span>↗</span>
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="project-card-top">
                <span>{project.number}</span>

                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project <span>↗</span>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;