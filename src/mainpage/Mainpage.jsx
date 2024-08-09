import React, {useState} from 'react'
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
      <div className='w-full grid grid-cols-7 bg-myBlack1'>

        {/* Handelspartner */}
        <div className='col-span-1'>
          <Handelspartner />
        </div>

        {/* Suche // Kunden/Kategorie Filter */}
        <div className='col-start-2 col-span-2'>
          <Suche />
          <KundenKategorieFilter />
        </div>

        {/* Stammdaten */}
        <div className='col-span-1'>
          <Mitarbeiter />
          <Art />
        </div>

        {/* Datum */}
        <div className='col-span-1'>
          <Datum />
        </div>

        {/* Rückruf */}
        <div>
          <Rueckruf />
        </div>

        {/* Erledigt */}
        <div>
          <Erledigt />
        </div>

      </div>
      <div>
        <DatumComp />
        {/* DatenAnrufe */}
        <div className='w-full h-screen grid grid-cols-6 bg-myBlack1'>
          <DatenAnrufe />
        </div>
      </div>

    </div>
  )
}

export default Mainpage