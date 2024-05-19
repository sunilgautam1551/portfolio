"use client";
import React from 'react';

const cards = [
  {
    title: 'Frontend',
    technologies: [
      'HTML',
      'CSS',
      'Javascript',
      'Typescript',
      'React Js',
      'Next Js',
      'Tailwind CSS',
      'Material UI',
      'Bootstrap',
      'JQuery',
      'SCSS/SASS',

    ],
  },
  {
    title: 'Backend',
    technologies: ['Node.js', 'Express.js', 'Socket'],
  },
  {
    title: 'Database',
    technologies: ['MongoDB', 'Neo4j', 'SQL'],
  },
  {
    title: 'Unit Testing',
    technologies: ['RTL', 'Jest', 'Enzyme'],
  },
  {
    title: 'Visualization Library',
    technologies: ['Ag grid', 'Highcharts', 'Google map', 'Open layer'],
  },
  {
    title: 'Tools',
    technologies: ['Vs studio', 'vs code', 'Jira', 'Bitbucket', 'Postman', 'Git lab'],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full py-16 px-4 bg-[#240046]">
      <h1 className='md:text-4xl sm:text-3xl text-2xl text-white font-bold py-4 text-center'>
        Skills
      </h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, technologies }: any) => {
  return (
    <div className="bg-[#3c096c] rounded-lg shadow-lg overflow-hidden text-center p-6 transform transition duration-300 hover:scale-105">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="flex flex-wrap justify-center mt-4">
        {technologies.map((tech: any) => (
          <div key={tech} className="mr-2 mb-2">
            <span className="inline-block bg-gray-200 rounded-full p-2 px-4 text-sm font-semibold text-gray-800 hover:bg-gray-300 transition duration-200">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;