import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EintragNeuSuchbegriff from './eintragComponents/EintragNeuSuchbegriff'
import EintragNeuName1 from './eintragComponents/EintragNeuName1'
import EintragNeuName2 from './eintragComponents/EintragNeuName2'
import EintragNeuStrasse from './eintragComponents/EintragNeuStrasse'
import EintragNeuOrt from './eintragComponents/EintragNeuOrt'
import EintragNeuPlz from './eintragComponents/EintragNeuPlz'
import EintragNeuTelefon from './eintragComponents/EintragNeuTelefon'
import EintragNeuEmail from './eintragComponents/EintragNeuEmail'
import EintragNeuMemo from './eintragComponents/EintragNeuMemo'


const NeuerKunde = () => {

  const [suchbegriff, setSuchbegriff] = useState('')
  const [name1, setName1] = useState('')
  const [name2, setName2] = useState('')
  const [strasse, setStrasse] = useState('')
  const [plz, setPlz] = useState('')
  const [ort, setOrt] = useState('')
  const [telefon, setTelefon] = useState('')
  const [eMail, setEmail] = useState('')
  const [memo, setMemo] = useState('')
  const navigate = useNavigate()

  const createData = async () => {

    try {
      const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          suchbegriff,
          name1,
          name2,
          strasse,
          plz,
          ort,
          telefon,
          eMail,
          memo
        })
      }

      const res = await fetch('http://localhost/anruferliste/backend/kundeNeu.php', request);
      const newData = await res.json();

      return newData;

    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleSubmitData = async () => {
    createData()
    navigate('/')
  }

  return (
    <div className='fixed flex justify-center items-center w-screen h-screen bg-gray-800'>
      <div className='w-[90%] h-[90%] rounded-md bg-blue-200'>
        <div className='grid grid-cols-4 gap-4 p-4'>
          <div>
            <EintragNeuSuchbegriff setFirmenname={setSuchbegriff}/>
          </div>
          <div>
            <EintragNeuName1 setVorname={setName1}/>
          </div>
          <div>
            <EintragNeuName2 setNachname={setName2}/>
          </div>
          <div>
            <EintragNeuStrasse setStrasse={setStrasse}/>
          </div>
          <div>
            <EintragNeuPlz setPlz={setPlz}/>
          </div>
          <div>
            <EintragNeuOrt setOrt={setOrt}/>
          </div>
          <div>
            <EintragNeuTelefon setTelefon={setTelefon}/>
          </div>
          <div>
            <EintragNeuEmail setEmail={setEmail}/>
          </div>
          <div className='col-span-3 h-auto'>
            <EintragNeuMemo setMemo={setMemo}/>
          </div>
        </div>
        <div className='flex justify-center mt-4'>
          <button className='bg-white rounded-md border border-black px-2 w-26 mx-2'>
            <Link to={'/'}>abbrechen</Link>
          </button>
          <button className='bg-white rounded-md border border-black px-2 w-26 mx-2' onClick={handleSubmitData}>speichern</button>
        </div>
      </div>
    </div>
  )
}

export default NeuerKunde