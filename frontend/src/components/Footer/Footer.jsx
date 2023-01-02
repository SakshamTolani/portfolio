import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsGithub,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsFacebook,
  BsMailbox,
  BsMailbox2,
} from "react-icons/bs";
import {GrMail} from "react-icons/gr"
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Saksham Tolani. I am a Full-Stack Developer and a
          Computer Science student for life. I decided to study computer science
          because of my interest in computer systems from an early age. Using
          logic to fulfil different application requirements is a challenge I
          always liked. I have been looking for a career opportunity where I can
          use my skills to contribute to real-time projects and gain
          professional experience as a software engineer. My short-term goals in
          life include upskilling myself in artificial intelligence algorithms
          and contributing to the growth of the organisation via leveraging the
          power of data analytics.
        </Typography>
        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>

      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/SakshamTolani/" target="blank">
          <BsGithub />
        </a>
        <a href="mailto:sakshamtolani@gmail.com" target="blank">
          <GrMail />
        </a>
        <a href="https://instagram.com/sakshamtolani_/" target="blank">
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/saksham-tolani-5b1b831a2/"
          target="blank"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
