import React, { useState } from 'react'

const DatumComp = () => {

  const startDate = new Date(2024, 0, 1)
  const endDate = new Date(2024, 11, 31)

  const [currentDate, setCurrentDate] = useState(startDate);

  const handlePreviousDate = () => {
    if (currentDate > startDate) {
      setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)));
    }
  };

  const handleNextDate = () => {
    if (currentDate < endDate) {
      setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)));
    }
  };

  return (
    <div className="grid grid-cols-[auto,1fr,auto]">
      <button className='float-left w-auto px-2 border-r' onClick={handlePreviousDate}>Previous</button>
      <div className="grid grid-cols-5 justify-items-center">
        {[...Array(5)].map((_, index) => {
          const date = new Date(currentDate);
          date.setDate(date.getDate() + index);
          return (
            <div key={index} className="p-2">
              {date.toLocaleDateString()}
            </div>
          );
        })}
      </div>
      <button className='float-right w-20 px-2 border-l' onClick={handleNextDate}>Next</button>
    </div>
  );
}

export default DatumComp