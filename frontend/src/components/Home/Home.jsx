import React, { useEffect, useState } from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import { Typography } from "@mui/material";
import VisibilitySensor from 'react-visibility-sensor';
import TimeLine from "../TimeLine/TimeLine.jsx";
import { MouseOutlined } from "@mui/icons-material";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
  SiPython,
  SiJava,
} from "react-icons/si";
import { BiRightArrowAlt } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { MdBusiness, MdOutlineWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

function Home({ timelines, skills }) {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Software Developer", "Data Analyst"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(8, 5, 5);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.01;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillsBox");

      if (window.scrollY > 700) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }
    });
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <div className="animate__animated animate__fadeIn">
          <span className="tagline">Welcome to my Portfolio</span>
          <h1>
            {`Hi! I'm Saksham,`}{" "}
            <span
              className="txt-rotate"
              data-rotate='["Web Developer", "Software Developer", "Data Analyst"]'
            >
              <span className="wrap">{text}</span>
            </span>
          </h1>
          <Link to="#" onClick={()=>window.location = 'mailto:sakshamtolani@gmail.com'}>
            LET'S CONNECT <BiRightArrowAlt />
          </Link>
        </div>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          {/* ------------------------------FACE 1---------------------------------------- */}

          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={skills.image1.url} alt="Face1" />
          </div>

          {/* ------------------------------FACE 2---------------------------------------- */}

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={skills.image2.url} alt="Face2" />
          </div>

          {/* ------------------------------FACE 3---------------------------------------- */}

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={skills.image3.url} alt="Face3" />
          </div>

          {/* ------------------------------FACE 4---------------------------------------- */}

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={skills.image4.url} alt="Face4" />
          </div>

          {/* ------------------------------FACE 5---------------------------------------- */}

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={skills.image5.url} alt="Face5" />
          </div>

          {/* ------------------------------FACE 6---------------------------------------- */}

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={skills.image6.url} alt="Face6" />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiPython />
          <SiHtml5 />
          <SiJavascript />
          <SiJava />
          <SiReact />
          <SiMongodb />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>

      <div className="homeYoutube">
        <Typography variant="h3"> STATISTICS</Typography>
        <div className="homeYoutubeWrapper">
          <div class="title">
            <h1>ABOUT STUDIO</h1>
            <p>
              Duis vulputate et nulla ac dapibus. Nullam feugiat massa elit, at
              scelerisque urna facilisis id. Suspendisse commodo scelerisque sem
              sit amet aliquam. Curabitur nulla lectus, pretium ac arcu sed,
              laoreet eleifend nunc.Duis vulputate et nulla ac dapibus. Nullam
              feugiat massa elit.
            </p>
          </div>

          <div class="row">
            <div class="col">
              <div class="counter-box">
                <AiOutlineProject />
                <h2 class="counter">
                <CountUp end={20} redraw={false} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </h2>
                <h4>TOTAL PROJECTS</h4>
              </div>
            </div>
            <div class="col">
              <div class="counter-box">
                <MdOutlineWork />
                {/* <h2 class="counter"><CountUp end={16} duration={3}/>+</h2> */}
                <h2 class="counter">
                  <CountUp end={16} redraw={false} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </h2>
                <h4>EXPERIENCE (IN MONTHS)</h4>
              </div>
            </div>
            <div class="col">
              <div class="counter-box">
                <GiSkills />
                <h2 class="counter">
                <CountUp end={12} redraw={false} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </h2>
                <h4>SKILLS</h4>
              </div>
            </div>
            <div class="col">
              <div class="counter-box">
                <MdBusiness />
                <h2 class="counter">
                <CountUp end={6} redraw={false} duration={2}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  +
                </h2>
                <h4>COMPANIES WORKED WITH</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
