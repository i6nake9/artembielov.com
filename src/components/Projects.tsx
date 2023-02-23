import React from 'react';
import ProjectItem from './ProjectItem';
import propertyImg from '../assets/img.png';

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">These are my favorite projects</p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={propertyImg} title="test" />
        <ProjectItem img={propertyImg} title="test" />
        <ProjectItem img={propertyImg} title="test" />
        <ProjectItem img={propertyImg} title="test" />
      </div>
    </div>
  );
};

export default Projects;
