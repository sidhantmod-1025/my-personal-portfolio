import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 75%",
          once: true,
        },
      });

      // Section label
      tl.from(".contact-label", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })

        // Main contact card
        .from(
          ".contact-card",
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.3"
        )

        // Left-side content
        .from(
          ".contact-badge, .contact-content h2, .contact-content p, .contact-primary-button",
          {
            y: 22,
            opacity: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.45"
        )

        // Form fields
        .from(
          ".contact-form label, .contact-form input, .contact-form textarea, .contact-submit-button",
          {
            y: 18,
            opacity: 0,
            duration: 0.5,
            stagger: 0.07,
            ease: "power2.out",
          },
          "-=0.5"
        )

        // Bottom footer text
        .from(
          ".contact-bottom span",
          {
            y: 12,
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.2"
        );

      // Subtle continuous animation on badge
      gsap.to(".contact-badge", {
        boxShadow: [
          "0 0 0 rgba(56, 232, 255, 0)",
          "0 0 18px rgba(56, 232, 255, 0.12)",
          "0 0 0 rgba(56, 232, 255, 0)",
        ],
        duration: 3,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formRef.current) return;

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_xqn8h8j",
        "template_r5lfd4i",
        formRef.current,
        {
          publicKey: "obMhJ4W0rMmiw2l52",
        }
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="contact-section"
      id="contact"
      ref={sectionRef}
    >
      <div className="contact-container">
        <div className="contact-label">
          <span>05</span> — GET IN TOUCH
        </div>

        <div className="contact-card">
          <div className="contact-content">
            <span className="contact-badge">
              LET'S CONNECT
            </span>

            <h2>
              Have an idea?
              <br />
              <span>Let's build it.</span>
            </h2>

            <p>
              I'm Sidhant Kumar, a BCA student passionate about
              web development and AI. Have an opportunity,
              collaboration idea, or just want to connect?
              Send me a message.
            </p>

            <a
              href="https://github.com/sidhantmod-1025"
              target="_blank"
              rel="noreferrer"
              className="contact-primary-button"
            >
              Explore My GitHub ↗
            </a>
          </div>

          <form
            className="contact-form"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <label htmlFor="from_name">Your Name</label>

            <input
              id="from_name"
              type="text"
              name="from_name"
              placeholder="Enter your name"
              autoComplete="name"
              minLength={2}
              maxLength={100}
              required
            />

            <label htmlFor="from_email">Your Email</label>

            <input
              id="from_email"
              type="email"
              name="from_email"
              placeholder="you@example.com"
              autoComplete="email"
              maxLength={254}
              required
            />

            <label htmlFor="subject">Subject</label>

            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Internship, project, collaboration..."
              maxLength={150}
              required
            />

            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows={5}
              minLength={10}
              maxLength={3000}
              required
            />

            <button
              type="submit"
              className="contact-submit-button"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message ↗"}
            </button>

            {status === "success" && (
              <p
                className="contact-feedback success"
                role="status"
                aria-live="polite"
              >
                Message sent successfully! Thanks for reaching out.
              </p>
            )}

            {status === "error" && (
              <p
                className="contact-feedback error"
                role="alert"
              >
                Message could not be sent. Please try again.
              </p>
            )}
          </form>
        </div>

        <div className="contact-bottom">
          <span>LET'S CREATE SOMETHING MEANINGFUL.</span>
          <span>BASED IN INDIA 🇮🇳</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;