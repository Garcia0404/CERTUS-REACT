import React from 'react'

export function ColorChanger({color}) {
  return (
    <>
      <div className='w-40 h-40' style={{backgroundColor:`${color}`}}></div>  
    </>
  )
}
