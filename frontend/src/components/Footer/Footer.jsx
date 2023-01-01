import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Saksham Tolani. I am a Full-Stack Developer and a
          tutorial on Youtube channel called <b> 6 Pack Programmer</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>

      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/SakshamTolani/" target="black">
          <BsGithub />
        </a>
        <a href="https://www.facebook.com/saksham.tolani/" target="black">
          <BsFacebook />
        </a>
        <a href="https://instagram.com/sakshamtolani_/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/saksham-tolani-5b1b831a2/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
