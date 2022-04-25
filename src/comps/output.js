import React from 'react'

export default function Output(props) {
  return (
    <div className='d-flex mt-5'>
      <h2 className='me-3 mt-3'>{props.res[0]}</h2>
      <img className='me-3 ' width={60} height={75} src='https://www.picng.com/upload/equals/png_equals_50642.png'/>
      <h2 className='mt-3'>{props.res[1]}</h2>
    </div>
  )
}
