'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types/Project';
import Image from 'next/image';
import { X } from 'lucide-react';

type ProjectDetailsProps = {
  project: Project;
  closeModal: () => void;
};

const ProjectDetails = ({ project, closeModal }: ProjectDetailsProps) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className='fixed pt-80 md:pt-0 inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto backdrop-blur-sm'
      onClick={closeModal}
    >
      <motion.div
        className='relative mx-4 my-8 max-w-2xl w-full border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 p-8'
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className='absolute top-2.5 right-2.5 text-white text-2xl font-bold hover:text-gray-300 focus:outline-none'
          aria-label='Close modal'
        >
          <X className='text-stone-400' />
        </button>

        {/* Modal Content */}
        <div className='flex'>
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={500}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
            className='rounded-t-2xl'
          />
        </div>
        <div className='p-5 text-stone-600'>
          <h2 className='mb-2 text-2xl font-bold text-stone-800'>
            {project.title}
          </h2>
          <p className='mb-3 font-normal'>{project.description}</p>
          {project.subDescription.map((subDesc, index) => (
            <p className='mb-3 font-normal' key={index}>
              {subDesc}
            </p>
          ))}
          <div className='flex flex-col items-center md:justify-between mt-4 gap-y-3'>
            <div className='flex flex-wrap gap-3 flex-1'>
              {project.tags.map((tag) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={tag.path}
                  alt={tag.name}
                  key={tag.id}
                  // className='w-1/2 h-1/2'
                />
              ))}
            </div>
            <a
              className='inline-flex justify-end items-center gap-1 mx-5 font-medium cursor-pointer whitespace-nowrap hover:scale-110 shadow-stone-600 rounded-lg p-2 hover:shadow-xl/30 transition-all'
              href={project.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              <p>View Project</p>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
