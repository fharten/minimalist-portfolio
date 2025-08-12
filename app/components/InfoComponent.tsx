'use client';

import { useState } from 'react';
import InfoOverview from './InfoOverview';
import InfoDetails from './InfoDetails';

function InfoComponent() {
  const [showInfoDetails, setShowInfoDetails] = useState<boolean>(false);

  return (
    <>
      {!showInfoDetails ? (
        <div className='order-1 md:order-2 flex items-start flex-col justify-center col-span-1 md:col-span-7 py-[10vh] md:py-[20vh] px-[10vw] md:h-screen relative md:sticky left-auto top-0 right-0 bottom-0'>
          <InfoOverview showDetails={() => setShowInfoDetails(true)} />
        </div>
      ) : (
        <div className='order-1 md:order-2 flex items-start flex-col justify-center col-span-1 md:col-span-7 py-[10vh] md:py-[20vh] px-[10vw] md:h-min-screen relative left-auto'>
          <InfoDetails closeDetails={() => setShowInfoDetails(false)} />
        </div>
      )}
    </>
  );
}

export default InfoComponent;
