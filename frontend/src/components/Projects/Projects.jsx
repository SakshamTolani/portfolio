import { Button,Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteProject, getUser } from "../../actions/user";


export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {

  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };
  return (
    <>
      <a href={url} className="projectCard" target="blank">
        <div>
          <img src={projectImage} alt={projectTitle} height="auto" width="auto"/>
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">TECH STACK: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && <Button style={{ color: "rgba(40,40,40,0.7)" }} onClick={() => deleteHandler(id)}>
        <Delete/>
        </Button>}
    </>
  );
};

const Projects = ({projects}) => {
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((project, index) => (
          <ProjectCard 
          key={index}
          url={project.url}
          projectImage={project.image.url}
          projectTitle={project.title}
          description={project.description}
          technologies={project.techStack}/>
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        That's It!!

        You can find some more projects on<a href="https://github.com/SakshamTolani/" target="blank">Github</a> 
      </Typography>
    </div>
  );
};

export default Projects;
