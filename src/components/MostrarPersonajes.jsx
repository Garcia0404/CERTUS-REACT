import React from 'react'
import {personajes} from '../utils/DataPersonajes'

export function MostrarPersonajes() {
  return (
    <>
      {
        personajes.map((personaje)=>(
          console.log(personaje)
        ))
      }
    </>
  )
}
