import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div
  className="card"
  style={{
    width: "300px",
    maxWidth: "100%"
  }}
>

      <div style={{ textAlign:"center" }}>
        <img
  src="/my photo.jpeg"
  alt="Brindha profile"
  style={{
    width: "140px",
    height: "160px",
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    margin: "0 auto"
  }}
/>

        <h2>Brindha R</h2>
        <p style={{color:"#aaa"}}>Full Stack Developer</p>
      </div>

      <hr />

      <p><FaEnvelope /> rbrindha242@gmail.com</p>
      <p><FaPhone /> 7200728722</p>
      <p><FaMapMarkerAlt /> Tamil Nadu, India</p>

      <hr />

     <p>
  <FaGithub />{" "}
  <a
    href="https://github.com/Brindha-it"
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
  >
    GitHub
  </a>
</p>

<p>
  <FaLinkedin />{" "}
  <a
    href="https://www.linkedin.com/in/brindharamanathan/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
  >
    LinkedIn
  </a>
</p>
    </div>
  );
}