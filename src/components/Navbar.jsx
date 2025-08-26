import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProjects = () => setProjectsOpen(!projectsOpen);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/skills", name: "Skills" },
    { path: "/services", name: "Services" }, // ✅ Added Services page
    { path: "/projects", name: "Projects", dropdown: ["Web", "Mobile", "AI"] },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <nav
      className="navbar"
      style={{
        background: "linear-gradient(90deg, #585388, #8076a3)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 50px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow:
          scrollY > 5 ? "0 4px 12px rgba(0,0,0,0.3)" : "0 0 0 rgba(0,0,0,0)",
        borderRadius: "0 0 15px 15px",
        flexWrap: "wrap",
        backdropFilter: "blur(5px)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <div
        className="logo"
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          letterSpacing: "2px",
          color: "#f9c5bd",
          cursor: "pointer",
          animation: "pulse 2s infinite",
        }}
      >
        Umar Dev
      </div>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={toggleMenu}
        style={{
          display: "none",
          cursor: "pointer",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <span
          style={{
            width: "25px",
            height: "3px",
            background: "#f2d53c",
            borderRadius: "2px",
            transition: "0.3s",
            transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }}
        />
        <span
          style={{
            width: "25px",
            height: "3px",
            background: "#f2d53c",
            borderRadius: "2px",
            transition: "0.3s",
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            width: "25px",
            height: "3px",
            background: "#f2d53c",
            borderRadius: "2px",
            transition: "0.3s",
            transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }}
        />
      </div>

      {/* Nav Links */}
      <div
        className="nav-links"
        style={{
          display: menuOpen ? "flex" : "flex",
          gap: "25px",
          alignItems: "center",
          flexDirection: "row",
          transition: "all 0.3s ease",
        }}
      >
        {navLinks.map((link, idx) => {
          const active = location.pathname === link.path;
          return (
            <div key={idx} style={{ position: "relative" }}>
              <Link
                to={link.path}
                title={`Go to ${link.name}`}
                style={{
                  color: active ? "#beef00" : "#f2d53c",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  padding: "5px 10px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  boxShadow: active ? "0 0 12px #beef00" : "none",
                  background:
                    link.dropdown && projectsOpen ? "rgba(0,0,0,0.2)" : "none",
                  cursor: "pointer",
                }}
                onClick={link.dropdown ? toggleProjects : undefined}
              >
                {link.name}
                {link.dropdown && (
                  <span
                    style={{
                      marginLeft: "5px",
                      fontSize: "0.9rem",
                      color: "#ff0028",
                    }}
                  >
                    ▼
                  </span>
                )}
              </Link>

              {/* Dropdown */}
              {link.dropdown && projectsOpen && (
                <div
                  className="dropdown"
                  style={{
                    position: "absolute",
                    top: "35px",
                    left: 0,
                    background: "#8076a3",
                    padding: "10px",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    minWidth: "120px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                    animation: "fadeSlide 0.3s ease-out",
                    zIndex: 50,
                  }}
                >
                  {link.dropdown.map((item, i) => (
                    <Link
                      key={i}
                      to={`${link.path}/${item.toLowerCase()}`}
                      style={{
                        color: "#f9c5bd",
                        textDecoration: "none",
                        fontWeight: "bold",
                        transition: "0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.color = "#beef00")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.color = "#f9c5bd")
                      }
                    >
                      {item}
                      <span
                        style={{
                          background: "red",
                          color: "white",
                          borderRadius: "50%",
                          padding: "0 5px",
                          fontSize: "0.7rem",
                          marginLeft: "5px",
                        }}
                      >
                        {Math.floor(Math.random() * 10)}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .nav-links {
            flex-direction: column;
            width: 100%;
            display: ${menuOpen ? "flex" : "none"};
            background: linear-gradient(180deg, #585388, #8076a3);
            padding: 15px 0;
            border-radius: 0 0 15px 15px;
          }

          .hamburger {
            display: flex;
          }
        }

        .nav-links a:hover {
          color: #ff0028;
          transform: scale(1.1);
          box-shadow: 0 0 8px #ff0028;
        }
      `}</style>
    </nav>
  );
}
