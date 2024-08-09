import React, { useRef } from 'react'

const EintragNeuMemo = ({ setMemo }) => {

  const memo = useRef('')

  return (
    <div className='h-full flex flex-col items-center justify-center py-2 mt-2 border border-white rounded-md'>
      <p className='text-sm font-semibold font-serif mb-2'>Zusätzliche informationen:</p>
      <textarea className='w-[90%] h-52 text-sm bg-slate-100' ref={memo} onChange={() => setMemo(memo.current.value)}></textarea>
    </div>
  )
}

export default EintragNeuMemo