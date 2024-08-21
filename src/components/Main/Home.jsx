import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { assets } from "../../assets/assets";
import "devicon/devicon.min.css";

const Home = () => {
  return (
    <div className="content-page">
      <Sidebar />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="card w-100 shadow-lg">
                <div className="card-body p-2 p-sm-3 p-md-4 p-lg-5">
                  <div className="text-center">
                    <img
                      src={assets.ironbatman}
                      className="rounded-circle avatar-lg img-thumbnail"
                      alt="profile"
                    />
                  </div>

                  <div className="text-center">
                    <h4 className="mb-1 mt-2">Jaymin Rabari</h4>
                    <p className="text-muted">Human Software Engineer</p>

                    <div className="d-flex justify-content-center">
                      <a
                        href="/portfolio"
                        className="btn btn-success btn-sm me-1"
                        target="_blank"
                      >
                        <i className="bi bi-arrow-up-right-circle-fill fs-5 me-1"></i>
                        <strong>View Portfolio</strong>
                      </a>
                      <a href="/resume" className="btn btn-danger btn-sm">
                        <i className="bi bi-file-earmark-text-fill fs-5 me-1"></i>
                        <strong>View Resume</strong>
                      </a>
                    </div>
                  </div>

                  <div className="text-start mt-3">
                    <h4 className="fs-13 text-uppercase">Short Bio</h4>
                    <p className="text-muted mb-3">
                      Hi, I'm Jaymin Rabari, a freshly minted software engineer
                      with a passion for building digital wonders. With skills
                      in software, mobile app, and web app development, I can
                      help you shape your ideas into reality (or at least make
                      them look really cool).
                      <br />
                      <br />
                      When I'm not coding, I'm probably exploring new ways to
                      use AI to boost my productivity (or just playing with
                      AI-powered toys). I also love sharing my experiences and
                      insights through writing - you can find me blogging about
                      my personal journey, tech trends, product building
                      lessons, and even my adventures in making money (because
                      who doesn't love a good side hustle?).
                      <br />
                      <br />
                      Let's team up and create something amazing – or at least
                      something that doesn't crash every five minutes
                    </p>
                  </div>
                  <hr />

                  <ul className="nav nav-tabs justify-content-center mb-3">
                    <li className="nav-item">
                      <a
                        href="#skill"
                        data-bs-toggle="tab"
                        aria-expanded="false"
                        className="nav-link"
                      >
                        My Skills
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#experience"
                        data-bs-toggle="tab"
                        aria-expanded="true"
                        className="nav-link active"
                      >
                        Experience
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div className="tab-pane" id="skill">
                      <h5 className="mt-0 mb-1">Front End</h5>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-html5-plain"></i> HTML
                      </span>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-css3-plain"></i> CSS
                      </span>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-javascript-plain"></i> JavaScript
                      </span>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-react-original"></i> React.JS
                      </span>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-bootstrap-plain"></i> Bootstrap
                      </span>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-xml-plain"></i> XML
                      </span>
                      <br />
                      <br />

                      <h5 className="mt-0 mb-1">Back End</h5>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-nodejs-plain"></i> Node.JS
                      </span>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-express-original"></i> Express.JS
                      </span>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-python-plain"></i> Python
                      </span>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-php-plain"></i> PHP
                      </span>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-laravel-plain"></i> Laravel
                      </span>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-java-plain"></i> Java
                      </span>
                      <br />
                      <br />

                      <h5 className="mt-0 mb-1">DevOps</h5>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-docker-plain"></i> Docker
                      </span>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-kubernetes-plain"></i> Kubernetes
                      </span>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-jenkins-plain"></i> Jenkins
                      </span>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-git-plain"></i> Git
                      </span>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-amazonwebservices-original"></i>{" "}
                        AWS
                      </span>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-googlecloud-plain"></i> GCP
                      </span>
                      <br />
                      <br />

                      <h5 className="mt-0 mb-1">Database</h5>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-mysql-plain"></i> MySQL
                      </span>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-mongodb-plain"></i> MongoDB
                      </span>
                      <span className="badge badge-outline-warning me-1">
                        <i className="devicon-firebase-plain"></i> Firebase
                      </span>
                    </div>

                    <div className="tab-pane show active" id="experience">
                      <div className="timeline-alt pb-0">
                        <div className="timeline-item">
                          <i className="ri-record-circle-line text-bg-info timeline-icon"></i>
                          <div className="timeline-item-info">
                            <h5 className="mt-0 mb-1">
                              Software Developer Intern
                            </h5>
                            <p className="fs-14">
                              Infonaya Software
                              <span className="ms-2 fs-12">
                                Jan 2024 - May 2024
                              </span>
                            </p>
                            <p className="text-muted mt-2 mb-0 pb-3">
                              &bull; Led a team in the development of an Advance
                              Event Management System featuring a QR Code
                              Attendance feature.
                              <br />
                              <br />
                              &bull; Successfully completed the project as the
                              lead intern, showcasing strong leadership and
                              project management skills.
                              <br />
                              <br />
                              &bull; Utilized technologies including HTML, CSS,
                              JavaScript, Bootstrap 5, PHP, and MySQL to deliver
                              a robust and scalable solution.
                              <br />
                              <br />
                              &bull; Gained hands-on experience in full-stack
                              web development, focusing on backend
                              functionality, database management, and team
                              coordination.
                              <br />
                              <br />
                            </p>
                          </div>
                        </div>

                        <div className="timeline-item">
                          <i className="ri-record-circle-line text-bg-primary timeline-icon"></i>
                          <div className="timeline-item-info">
                            <h5 className="mt-0 mb-1">
                              React JS Developer Intern
                            </h5>
                            <p className="fs-14">
                              Brainybeam Pvt. Ltd.
                              <span className="ms-2 fs-12">
                                July 2023 - Aug 2023
                              </span>
                            </p>
                            <p className="text-muted mt-2 mb-0 pb-3">
                              &bull; Contributed to the development of the
                              Dental Care application using React JS.
                              <br />
                              <br />
                              &bull; Applied frontend technologies such as HTML,
                              CSS, and React JS to create responsive and
                              interactive user interfaces.
                              <br />
                              <br />
                              &bull; Collaborated with a team to implement
                              features and enhance the overall user experience
                              of the application.
                              <br />
                              <br />
                            </p>
                          </div>
                        </div>

                        <div className="timeline-item">
                          <i className="ri-record-circle-line text-bg-info timeline-icon"></i>
                          <div className="timeline-item-info">
                            <h5 className="mt-0 mb-1">Web Developer Intern</h5>
                            <p className="fs-14">
                              IBM Skill Build
                              <span className="ms-2 fs-12">
                                Jan 2023 - March 2023
                              </span>
                            </p>
                            <p className="text-muted mt-2 mb-0 pb-2">
                              &bull; Designed and developed a Portfolio Site
                              emphasizing user-centered design principles.
                              <br />
                              <br />
                              &bull; Implemented frontend functionality using
                              HTML, CSS, and JavaScript to create a visually
                              appealing and functional website.
                              <br />
                              <br />
                              &bull; Acquired skills in frontend development
                              practices and gained insights into usability and
                              accessibility considerations.
                              <br />
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title mb-3">Education</h5>
                  <div className="education-details">
                    <div className="mb-3">
                      <strong style={{ fontSize: "0.9em" }}>
                        Bachelor’s in Engineering
                      </strong>
                      <br />
                      &bull; Computer Engineering
                      <br />
                      &bull; Gujarat Technological University
                      <br />
                      &bull; <strong>GGPA:</strong> 7.87 [2021 – 2024]
                    </div>

                    <div>
                      <strong style={{ fontSize: "0.9em" }}>
                        Diploma in Engineering
                      </strong>
                      <br />
                      &bull; Computer Engineering
                      <br />
                      &bull; Gujarat Technological University
                      <br />
                      &bull; <strong>CGPA:</strong> 8.38 [2018 – 2021]
                    </div>
                  </div>
                </div>
              </div>

              <div className="card shadow-lg">
                <div className="card-body text-center">
                  <h5
                    className="card-title mb-3"
                    style={{ fontSize: "1.11rem" }}
                  >
                    👋 Thanks for visiting my site!
                  </h5>
                  <p className="card-text" style={{ fontSize: "1.25rem" }}>
                    Glad to have you here.
                  </p>
                  <h5 className="card-title mb-3">Let's Connect</h5>
                  <div
                    className="d-flex justify-content-center"
                    style={{ gap: "0.7rem" }}
                  >
                    <a
                      href="https://github.com/jayminrabari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    >
                      <i
                        className="bi bi-github"
                        style={{ color: "#ffffff", fontSize: "1.2rem" }}
                      ></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jayminrabari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    >
                      <i
                        className="bi bi-linkedin"
                        style={{ color: "#0A66C2", fontSize: "1.2rem" }}
                      ></i>
                    </a>
                    <a
                      href="mailto:jayminrabari2000@gmail.com"
                      className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    >
                      <i
                        className="bi bi-envelope"
                        style={{ color: "#D44638", fontSize: "1.2rem" }}
                      ></i>
                    </a>
                    <a
                      href="https://twitter.com/jayminrabari07"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    >
                      <i
                        className="bi bi-twitter"
                        style={{ color: "#1DA1F2", fontSize: "1.2rem" }}
                      ></i>
                    </a>
                    <a
                      href="tel:+918469530635"
                      className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    >
                      <i
                        className="bi bi-telephone"
                        style={{ color: "#25D366", fontSize: "1.2rem" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card shadow-lg">
                <div className="card-body text-center">
                  <h5 className="card-title">Check Out My Amazing Blogs!</h5>
                  <p className="card-text">
                    I write amazing stuff that you don't want to miss. Explore
                    my latest posts and get inspired!
                  </p>
                  <div className="d-flex justify-content-center align-items-center">
                    <a
                      href="/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    >
                      <i
                        className="bi bi-send-fill"
                        style={{ color: "#ffffff", fontSize: "1.2rem" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
