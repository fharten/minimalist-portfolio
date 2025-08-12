'use client';

import { useState } from 'react';
import { projects } from '../data/projects';
import { motion, useMotionValue, useSpring } from 'motion/react';
import ProjectDetails from './ProjectDetails';
import { Project } from '../types/Project';

function Projects() {
  const [preview, setPreview] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const x = useMotionValue(550);
  const y = useMotionValue(280);
  const springX = useSpring(x, { damping: 150, stiffness: 90 });
  const springY = useSpring(y, { damping: 150, stiffness: 90 });
  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    x.set(e.clientX + 250);
    y.set(e.clientY + 20);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className='order-2 md:my-[25vh] min-h-screen md:min-h-1/2 flex flex-col md:order-1 md:pr-5 col-span-1 md:col-span-5'
    >
      <div className='flex flex-col justify-center mx-7 md:mx-auto gap-4'>
        {projects.map((project: Project) => (
          <button
            className='flex hover:scale-115 shadow-stone-600 rounded-lg p-2 hover:shadow-xl/30 transition-all'
            key={project.id}
            onMouseEnter={() => setPreview(project.image)}
            onMouseLeave={() => setPreview('')}
            onClick={() => setSelectedProject(project)}
          >
            <h3 className='text-left flex-1 md:mr-10'>{project.title}</h3>
            <p className='text-stone-400'>{project.year}</p>
          </button>
        ))}
        {preview && (
          <motion.img
            className='fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80'
            src={preview}
            style={{ x: springX, y: springY }}
          />
        )}
      </div>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          closeModal={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Projects;
