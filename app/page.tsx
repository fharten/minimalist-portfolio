import ProjectsComponent from './components/ProjectsComponent';
import InfoComponent from './components/InfoComponent';
import FooterComponent from './components/FooterComponent';

export default function Home() {
  return (
    <div className='font-sans text-stone-800 w-full min-h-screen grid grid-cols-1 md:grid-cols-12 grid-cols gap-10 bg-stone-100'>
      <ProjectsComponent />
      <InfoComponent />
      <FooterComponent />
    </div>
  );
}
