import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import "../App.css";

function Contact() {

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    const formData = new FormData(e.target);

    formData.append(
      "access_key",
      "9f91916d-4767-4506-8b00-c8cd62607295"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData
      }
    );

    const result = await response.json();

    if (result.success) {
      setStatus("success");
      e.target.reset();

      setTimeout(() => {
        setStatus("");
      }, 3000);
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="contact-page">

      <div className="contact-left">

        <h1>Let's Connect</h1>

        <p>
          Looking for internships, collaborations,
          and exciting opportunities.
          Feel free to reach out.
        </p>

        <div className="contact-info">

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>rbrindha242@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>7200728722</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Tamil Nadu, India</span>
          </div>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/Brindha-it"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/brindharamanathan/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      <div className="contact-right">

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

          {status === "success" && (
            <div className="success-toast">
              ✅ Message sent successfully!
            </div>
          )}

          {status === "error" && (
            <div className="error-toast">
              ❌ Failed to send message.
            </div>
          )}

        </form>

      </div>

    </div>
  );
}

export default Contact;