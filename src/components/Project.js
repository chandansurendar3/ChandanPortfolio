// src/components/Projects.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
 const navigate= useNavigate();

 const clickRms = ()=>{
  navigate('/Rms')
 }

 const clickCust = ()=>{
  navigate('/Cust')
 }

  const projects = [
    {
      title: "Royalty Management System",
      description: <p>Website which handles the royalties earned by artists based on the
      streams generated for their songs. Has three persona Admin, manager, and artist. 
      Has dashboards that display streams and revenue. Artist and manager can view 
      their transactions and also create and update contracts</p>,
      link: clickRms
      
    },
    {
      title: "Interactive Dashboard system for customer service",
      description: <p>developed an interactive dashboard system that aggregates and
      visualizes key metrics and insights related to customer service operations</p>,
      link: clickCust

    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <button onClick={project.link} className="bg-gray-800  hover:bg-blue-700 text-white" style={{padding:5}}>
              View </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
