import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { assets } from "../../assets/assets";

const Portfolio = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Sample card data (replace with your actual data)
    const cardData = [
      {
        title: "Portfolio Site",
        description:
          "A personal portfolio website showcasing my skills and projects.",
        role: "Front-end Developer",
        technologies: "React.JS + Vite | Bootstrap  ",
        client: "Personal project",
        link: "https://jayminrabari.github.io/portfolio/",
        image: assets.p_1,
        type: "web",
      },
      {
        title: "Bulk Resume Scanner",
        description: "NLP and ML-powered web app matching resumes to jobs. ",
        role: "Python Developer",
        technologies: "Flask | SpaCy | Bootstrap | MySQL",
        client: "Personal Project",
        link: "https://github.com/jayminrabari/Bulk-Resumes-Scanner",
        image: assets.p_2,
        type: "web",
      },
      {
        title: "Batch Management System",
        description:
          "Batch Management System with Class Scheduling, Attendance Tracking.",
        role: "PHP Developer",
        technologies: "PHP | Bootstrap | MySQL",
        client: "Personal project",
        link: "https://bms.lovestoblog.com",
        image: assets.p_3,
        type: "web",
      },
      {
        title: "Event Weavers",
        description: "Event Management with QR Based Attendance",
        role: "PHP Developer",
        technologies: "PHP | Bootstrap | MySQL ",
        client: "Internship Project",
        link: "https://rssevent.infonaya.in",
        image: assets.p_4,
        type: "web",
      },
      {
        title: "Gemini Clone",
        description: "Gemini Clone using React-JS",
        role: "React-JS Developer",
        technologies: "React.js | Tailwind | Gemini API",
        client: "Personal Project",
        link: "#",
        image: assets.p_5,
        type: "web",
      },
      {
        title: "Dental Care",
        description: "This dental care project was created during my internship.",
        role: "React-JS Developer",
        technologies: "React.js | Bootstrap 5 | Google Map API",
        client: "Personal Project",
        link: "https://denticarehub.vercel.app/",
        image: "https://i.imgur.com/Diq9MiY.png",
        type: "web",
      },
      {
        title: "Book Rental System",
        description: "It's simple book rental system - mini app",
        role: "MERN Stack Developer",
        technologies: "MERN",
        client: "Personal Project",
        link: "https://brs-z72z.vercel.app",
        image: assets.p_6,
        type: "web",
      },
    ];

    setCards(cardData);
  }, []);

  // Function to render cards based on their type
  const renderCards = (type) => {
    return cards
      .filter((card) => type === "all" || card.type === type)
      .map((card, index) => (
        <div
          className="col-sm-6 col-lg-3"
          key={index}
          style={{
            marginBottom: "20px", // Vertical space between rows of cards
            padding: "0 10px",
            boxSizing: "border-box",
          }}
        >
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              textDecoration: "none",
              color: "inherit",
              height: "100%",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={() => {
              const tooltip = document.getElementById(`tooltip-${index}`);
              if (tooltip) tooltip.style.visibility = "visible";
            }}
            onMouseOut={() => {
              const tooltip = document.getElementById(`tooltip-${index}`);
              if (tooltip) tooltip.style.visibility = "hidden";
            }}
          >
            <div
              className="card d-flex flex-column"
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "135px",
                  overflow: "hidden",
                }}
              >
                <img
                  className="card-img-top"
                  src={card.image}
                  alt="Project"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className="card-body"
                style={{
                  flex: "1 0 auto",
                }}
              >
                <h4 className="card-title">{card.title}</h4>
                <p className="card-text text-muted mb-1">{card.description}</p>
                <ul className="list-unstyled mb-0">
                  <li>
                    <strong>Role:</strong> {card.role}
                  </li>
                  <li>
                    <strong>Tech:</strong> {card.technologies}
                  </li>
                  <li>
                    <strong>Client:</strong> {card.client}
                  </li>
                </ul>
              </div>
            </div>
            <div
              id={`tooltip-${index}`}
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#000",
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "4px",
                visibility: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              Go to website
            </div>
          </a>
        </div>
      ));
  };

  return (
    <div className="content-page">
      <Sidebar />
      <div className="content">
        <div className="container-fluid">
          {/* <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <h4 className="page-title">Portfolio</h4>
              </div>
            </div>
          </div> */}

          <div className="row">
            <ul className="nav nav-tabs mb-3" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  href="#all"
                  data-bs-toggle="tab"
                  aria-expanded="false"
                  className="nav-link active"
                  aria-selected="false"
                  role="tab"
                >
                  All
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="#web"
                  data-bs-toggle="tab"
                  aria-expanded="true"
                  className="nav-link"
                  aria-selected="true"
                  role="tab"
                >
                  Web-App
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="#android"
                  data-bs-toggle="tab"
                  aria-expanded="false"
                  className="nav-link"
                  aria-selected="false"
                  role="tab"
                >
                  Android App
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="#software"
                  data-bs-toggle="tab"
                  aria-expanded="false"
                  className="nav-link"
                  aria-selected="false"
                  role="tab"
                >
                  Software
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane show active" id="all" role="tabpanel">
                <div className="row">{renderCards("all")}</div>
              </div>
              <div className="tab-pane" id="web" role="tabpanel">
                <div className="row">{renderCards("web")}</div>
              </div>
              <div className="tab-pane" id="android" role="tabpanel">
                <div className="row">{renderCards("android")}</div>
              </div>
              <div className="tab-pane" id="software" role="tabpanel">
                <div className="row">{renderCards("software")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
