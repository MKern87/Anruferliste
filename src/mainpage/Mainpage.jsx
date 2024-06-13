import React from 'react'
import Suche from './mainpageComponents/Suche'
import KundenKategorieFilter from './mainpageComponents/KundenKategorieFilter'
import Mitarbeiter from './mainpageComponents/Mitarbeiter'
import Art from './mainpageComponents/Art'
import Datum from './mainpageComponents/Datum'
import Rueckruf from './mainpageComponents/Rueckruf'
import Erledigt from './mainpageComponents/Erledigt'
import Handelspartner from './mainpageComponents/Handelspartner'
import DatenAnrufe from '../components/DatenAnrufe'
import DatumComp from '../components/DatumComp'

const Mainpage = () => {
  
  
  
  return (
    <div>
      <div className='w-full grid grid-cols-7 bg-gradient-to-l from-cyan-500 to-blue-500'>

        {/* Handelspartner */}

        <div className='col-span-1'>
          {<Handelspartner />}
        </div>

        {/* Suche // Kunden/Kategorie Filter */}

        <div className='col-start-2 col-span-2'>
          {<Suche />}
          {<KundenKategorieFilter />}
        </div>

        {/* Stammdaten */}

        <div className='col-span-1'>
          {<Mitarbeiter />}
          {<Art />}
        </div>

        {/* Datum */}

        <div className='col-span-1'>
          {<Datum />}
        </div>

        {/* Rückruf */}

        <div>
          {<Rueckruf />}
        </div>

        {/* Erledigt */}

        <div>
          {<Erledigt />}
        </div>

      </div>
      <div>
        {<DatumComp />}
      </div>
      {/* <div className='w-full grid grid-cols-6 bg-sky-200'>
          <div className='w-full grid col-span-1 justify-items-center'>1.1.1990</div>
          <div className='w-full grid col-span-1 justify-items-center'>2.1.1990</div>
          <div className='w-full grid col-span-1 justify-items-center'>3.1.1990</div>
          <div className='w-full grid col-span-1 justify-items-center'>4.1.1990</div>
          <div className='w-full grid col-span-1 justify-items-center'>5.1.1990</div>
          <div className='w-full grid col-span-1 justify-items-center'>6.1.1990</div>
        </div> */}

        {/* DatenAnrufe */}

        <div className='w-full h-screen grid grid-cols-6 bg-cyan-500'>
          {<DatenAnrufe />}
        </div>
    </div>
  )
}

export default Mainpage