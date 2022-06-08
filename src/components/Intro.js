import React from "react";
import resume from "../resume.pdf";
import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"serge"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I create stuff.</div>
          <div className="intro-desc">
            I'm a software engineer and artist based in Lincoln, Nebraska. I have great interest in full-stack development, artificial intelligence, human-computer interactions, and everything in between.
          </div>
          <a
            href="mailto:sergefrancis6@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Say hi!"}
          </a>
          <a
            href={resume} download className="download-resume">
            <GetAppOutlinedIcon></GetAppOutlinedIcon>
            {" " + "Resume"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
