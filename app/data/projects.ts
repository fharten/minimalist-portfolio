export const projects = [
  {
    id: 1,
    title: 'Blog',
    description:
      'My goal was to write blog posts directly in Obsidian and automatically integrate them into the blog.',
    subDescription: [
      'I chose AstroJS because it works seamlessly with markdown files, the file format used by Obsidian.',
      "The blog features a 'techy' aesthetic, fitting to the blog's theme.",
      'Nano Stores was a perfect fit as it is a lightweight state manager, allowing me to store and modify all posts in one state, enabling features like search implementation.',
    ],
    year: '2025',
    href: 'https://astrojs-tailwind-obsdian-blog.vercel.app/',
    logo: '',
    image: '/assets/projects/otg_deployed.png',
    tags: [
      {
        id: 1,
        name: 'Astro',
        path: 'https://img.shields.io/badge/Astro-1a1a1a?style=for-the-badge&logo=astro&logoColor=ffffff',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: 'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
      },
      {
        id: 3,
        name: 'React.js',
        path: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: 'https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white',
      },
      {
        id: 5,
        name: 'Nano Stores',
        path: 'https://img.shields.io/badge/Nano_Stores-333333?style=for-the-badge&logoColor=white',
      },
      {
        id: 6,
        name: 'Obsidian',
        path: 'https://img.shields.io/badge/Obsidian-483699?style=for-the-badge&logo=obsidian&logoColor=white',
      },
    ],
  },
  {
    id: 2,
    title: 'Tokyo Cofffee Shop',
    description:
      'I wanted to create a 3D website that immediately catches attention at first glance.',
    subDescription: [
      'To achieve this, I imagined a Tokyo coffee shop and designed how it could be presented online in an interactive and playful way.',
      'The project features slight animations and 3D interactivity to engage users and keep them interested while exploring the coffee shop experience.',
      'It blends aesthetic design with technical creativity, giving the visitor a sense of stepping into a warm, modern Tokyo café.',
    ],
    year: '2025',
    href: 'https://tsc-three-js.vercel.app/',
    logo: '',
    image: '/assets/projects/tsc-main.gif',
    tags: [
      {
        id: 1,
        name: 'TypeScript',
        path: 'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
      },
      {
        id: 2,
        name: 'React.js',
        path: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white',
      },
    ],
  },
];
