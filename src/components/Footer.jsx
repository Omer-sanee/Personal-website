import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer"
      style={{
        background: "#585388", // Power Blue
        color: "white",
        padding: "25px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      <div>
        <p>© {year} Spider. All Rights Reserved.</p>
      </div>

      <div
        className="footer-links"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          href="#"
          style={{ color: "#f2d53c", textDecoration: "none", fontWeight: "bold" }}
        >
          Privacy
        </a>
        <a
          href="#"
          style={{ color: "#f2d53c", textDecoration: "none", fontWeight: "bold" }}
        >
          Terms
        </a>
        <a
          href="#"
          style={{ color: "#f2d53c", textDecoration: "none", fontWeight: "bold" }}
        >
          Contact
        </a>

        {/* Social icons */}
        <a href="#" aria-label="Facebook" style={{ color: "#f2d53c" }}>
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Twitter" style={{ color: "#f2d53c" }}>
          <FaTwitter />
        </a>
        <a href="#" aria-label="LinkedIn" style={{ color: "#f2d53c" }}>
          <FaLinkedinIn />
        </a>
        <a href="#" aria-label="Instagram" style={{ color: "#f2d53c" }}>
          <FaInstagram />
        </a>
         <a href="#" aria-label="Instagram" style={{ color: "#f2d53c" }}>
          <FaInstagram />
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 20px;
          }
          .footer-links {
            gap: 10px;
          }
        }

        .footer-links a:hover {
          color: #ff0028; /* Electric Red hover effect */
          transform: scale(1.05);
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </footer>
  );
}
