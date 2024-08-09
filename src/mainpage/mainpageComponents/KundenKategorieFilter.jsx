import React, { useState } from 'react'
import NeuerEintrag from '../../eintrag/NeuerEintrag'
import { Link } from 'react-router-dom'

const KundenKategorieFilter = () => {


  return (

    <div className='grid grid-cols-2 mt-1 mb-4 mx-2 gap-2'>
      <div className='border border-white px-8 py-2 my-4 rounded-md flex flex-col items-center'>
        <p className='text-sm text-white font-semibold font-serif'>Neuen Anruf anlegen</p>
          <div className='grid place-items-center mt-2'>
            <button className='border border-black rounded-lg px-2 bg-gray-200'>
              <Link to={'/NeuerAnruf'}>Neuer Anruf</Link>
            </button>
          </div>
      </div>
      <div className='border border-white px-8 py-2 my-4 rounded-md flex flex-col items-center'>
        <p className='text-sm text-white font-semibold font-serif'>Neuen Kunden anlegen</p>
          <div className='grid place-items-center mt-2'>
            <button className='border border-black rounded-lg px-2 bg-gray-200'>
              <Link to={'/NeuerKunde'}>Neuer Kunde</Link>
            </button>
          </div>
      </div>
    </div>
  )
}

export default KundenKategorieFilter