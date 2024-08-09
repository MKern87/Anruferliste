import React, { useState } from 'react'
import DatenAnrufe from './DatenAnrufe';

const DatumComp = () => {

  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePreviousDate = () => {
    setCurrentDate(prevDate => new Date(prevDate.setDate(prevDate.getDate() - 1)));
  };

  const handleNextDate = () => {
    setCurrentDate(prevDate => new Date(prevDate.setDate(prevDate.getDate() + 1)));
  };

  return (
    <div className='grid grid-cols-[auto,1fr,auto]'>
      <button className='float-left w-auto px-2 border-r' onClick={handlePreviousDate}>Zurück</button>
      <div className='grid grid-cols-5 justify-items-center'>
        {[...Array(5)].map((_, index) => {
          const date = new Date(currentDate);
          date.setDate(date.getDate() + index);
          return (
            <div key={index} className='p-2'>
              {date.toLocaleDateString()}
            </div>
          );
        })}
      </div>
      <button className='float-right w-20 px-2 border-l' onClick={handleNextDate}>Vor</button>
    </div>
  );
}

export default DatumComp