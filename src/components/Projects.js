import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const projects = {
      "CryptoCurrency Trading Bot": {
        desc:
          "A trading bot to automate cryptocurrency trading strategies using Python, equipped with a basic GUI.",
        techStack: "Python",
        link: "https://github.com/Francis360-creator/Cryptocurrency_Trading_Bot"
        // open: "https://tdsb-app.herokuapp.com/"
      },
      "Portfolio Website": {
        desc:
          "Link to this potfolio website. Built using React.js leveraging MaterialUI.",
        techStack: "JavaScript React, CSS, HTML",
        link: "https://github.com/Francis360-creator/Portfolio-website"
      },
      "Asset Management System": {
        desc:
          "A Java program that implements an SQL database-backed asset management system to handle a large list of clienteles and their assets",
        techStack: "Java, SQL (MariaDB)",
        link: "https://github.com/Francis360-creator/Asset-Management-System"
      },
      "Movie Database": {
        desc:
          "An interactive Movie Database app using ReactJS.",
        techStack: "JavaScript React, CSS, HTML",
        link: "https://github.com/Francis360-creator/Movie-Database"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                    // openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>
                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
