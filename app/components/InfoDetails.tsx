/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useEffect } from 'react';

function InfoDetails({ closeDetails }: { closeDetails: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className='flex'>
        <button onClick={closeDetails}>
          <X className='text-stone-400' />
        </button>
      </div>
      <div className='flex items-center'>
        <div className='flex-1'>
          <h2 className='text-stone-800 text-xl font-bold'>Florian Harten,</h2>
          <h2 className='text-stone-800 text-xl font-bold'>Web Developer</h2>
        </div>
        <div className='size-40'>
          <Image
            src='/assets/me/flo_frei.png'
            alt='profile image of Florian Harten'
            width={500}
            height={500}
            className='rounded-lg'
          />
        </div>
      </div>
      <div className='my-5'>
        <div className='flex gap-2 flex-wrap'>
          <img
            src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB2'
            alt='react badge'
          />
          <img
            src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'
            alt='react router badge'
          />
          <img
            src='https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white'
            alt='next.js badge'
          />
          <img
            src='https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'
            alt='node.js badge'
          />
          <img
            src='https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white'
            alt='express.js badge'
          />
          <img
            src='https://img.shields.io/badge/Nunjucks-1C4913?style=for-the-badge&logo=nunjucks&logoColor=white'
            alt='nunjucks badge'
          />
          <img
            src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'
            alt='typescript badge'
          />
          <img
            src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'
            alt='javascript badge'
          />

          <img
            src='https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white'
            alt='SQL Badge'
          />
          <img
            src='https://img.shields.io/badge/Auth-6C47FF?style=for-the-badge&logo=auth0&logoColor=white'
            alt='Auth Badge'
          />
          <img
            src='https://img.shields.io/badge/API%20Development-FF6F00?style=for-the-badge&logo=postman&logoColor=white'
            alt='API Development Badge'
          />
          <img
            src='https://img.shields.io/badge/HTML5-DD4B25?style=for-the-badge&logo=html5&logoColor=white'
            alt='html5 badge'
          />
          <img
            src='https://img.shields.io/badge/CSS3-0070BB?style=for-the-badge&logo=css3&logoColor=white'
            alt='css badge'
          />
          <img
            src='https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white'
            alt='tailwindcss badge'
          />
          <img
            src='https://img.shields.io/badge/GIT-F05033?style=for-the-badge&logo=git&logoColor=white'
            alt='git badge'
          />
          <img
            src='https://img.shields.io/badge/Github-323330?style=for-the-badge&logo=github&logoColor=white'
            alt='github badge'
          />
        </div>
      </div>
      <div className='text-stone-600 flex flex-col gap-5'>
        <p>
          During the pandemic, I developed an interest in programming—initially
          as a hobby, but it quickly became clear to me: I truly enjoy it, and I
          want to pursue it as a career.
        </p>
        <p>
          I am currently enrolled in the Advanced Web Development Bootcamp at
          <a href='https://neuefische.de' target='_blank' className='font-bold'>
            {' '}
            neuefische
          </a>
          , where I work on expanding my skills to launch my career as a Web
          Developer.
        </p>
        <p>
          My previous experience as a cameraman and video editor has equipped me
          with valuable skills: I am accustomed to delivering quality work under
          pressure, thinking creatively, and finding solutions even in
          challenging situations. I have often been told that I maintain a sense
          of calm even in stress. I have always enjoyed learning new things and
          experimenting, which I believe aligns well with the world of web
          development.
        </p>
      </div>
    </div>
  );
}

export default InfoDetails;
