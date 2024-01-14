import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ColorChanger,TaskList} from './components'



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div className='m-5'>
      <h2 className='my-3'>Pregunta 1</h2>
      <ColorChanger color='#09f'/>  
    </div>
    <div className='m-5'>
      <h2 className='my-3'>Pregunta 2</h2>
      <TaskList></TaskList>
    </div>
  </>
)
