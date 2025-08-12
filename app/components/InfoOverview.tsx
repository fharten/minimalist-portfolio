function InfoOverview({ showDetails }: { showDetails: () => void }) {
  return (
    <div>
      <h2 className='font-display text-stone-800 text-2xl font-bold'>
        Florian Harten,
      </h2>
      <h2 className='font-display text-stone-800 text-2xl font-bold'>
        Web Developer
      </h2>
      <div className='flex gap-3'>
        <button onClick={showDetails}>
          <p className='text-stone-400 hover:text-stone-300'>About</p>
        </button>
        <a href='mailto:mail@florian-harten.de'>
          <p className='text-stone-400 hover:text-stone-300'>Email</p>
        </a>
        <a href='https://github.com/fharten' target='_blank'>
          <p className='text-stone-400 hover:text-stone-300'>GitHub</p>
        </a>
        <a href='https://www.linkedin.com/in/florian-harten/' target='_blank'>
          <p className='text-stone-400 hover:text-stone-300'>LinkedIn</p>
        </a>
      </div>
    </div>
  );
}

export default InfoOverview;
