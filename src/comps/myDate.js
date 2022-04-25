import React, { useEffect, useState } from 'react'

export default function MyDate() {
  const [time, setTime] = useState([]);
  useEffect(() => {
    setTime([new Date().toLocaleDateString(), new Date().toLocaleTimeString()])
  }, [])

  setInterval(() => {
    setTime([new Date().toLocaleDateString(), new Date().toLocaleTimeString()])
  }, 1000);

  return (
    <div className='mx-auto mb-4 text-center'>
      <h2 className='myDate_title'>{time[1]}</h2>
      <h2 className='myDate_title'>{time[0]}</h2>
    </div>
  )
}
