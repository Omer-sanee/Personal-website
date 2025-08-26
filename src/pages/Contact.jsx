import React from "react";
import "../style.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <p>If you’d like to reach out, here are my details:</p>

      <div className="contact-info">
        <p><strong>Email:</strong> omersanee470@gmail.com</p>
        <p><strong>Phone:</strong> +234 813 510 3329</p>
        <p><strong>Address:</strong> 567 Goran dutse, Kano state, Nigeria </p>
      </div>

      <p className="contact-note">
        You can send me an email directly or use the contact form (coming soon 🚀).
      </p>
    </div>
  );
};

export default Contact;
