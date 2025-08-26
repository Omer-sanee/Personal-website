import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappNumber = "2348135103329"; // Your number with country code
  const preFilledMessage = encodeURIComponent(
    "Hello, I saw your website and I want to chat with you."
  );

  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        transform: show ? "translateX(0)" : "translateX(100px)",
        opacity: show ? 1 : 0,
        transition: "all 0.6s ease-out",
      }}
    >
      {/* Tooltip */}
      {hover && (
        <div
          style={{
            marginBottom: "10px",
            backgroundColor: "#111827",
            color: "#beef00",
            padding: "8px 12px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            textAlign: "center",
            transform: "translateX(0)",
            transition: "all 0.3s ease-out",
          }}
        >
          Hi! How can I help you?
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${preFilledMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          fontSize: "28px",
          cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s",
          animation: "pulse 2s infinite",
        }}
      >
        <FaWhatsapp />
      </a>

      {/* Responsive styles and pulse animation */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        /* Mobile tweaks */
        @media (max-width: 768px) {
          div[style] {
            bottom: 15px !important;
            right: 15px !important;
          }
          a[aria-label] {
            width: 50px !important;
            height: 50px !important;
            font-size: 24px !important;
          }
          div[style] > div {
            font-size: 13px !important;
            padding: 6px 10px !important;
          }
        }

        /* Smaller devices */
        @media (max-width: 480px) {
          div[style] {
            bottom: 10px !important;
            right: 10px !important;
          }
          a[aria-label] {
            width: 45px !important;
            height: 45px !important;
            font-size: 22px !important;
          }
          div[style] > div {
            font-size: 12px !important;
            padding: 5px 8px !important;
          }
        }
      `}</style>
    </div>
  );
}
