import { listaDeTareas } from '../utils/ListaDeTareas';
import { useState } from 'react';

export function TaskList() {
  const [tareas, setTareas] = useState(listaDeTareas);
  const [text, setText] = useState('')

  function cambiarCompleted(id) {
    setTareas(tareas.map(tarea =>
        tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea
      )
    );
  }
  function agregar() {
    if(text.trim()){
      setTareas([...tareas,{
          id:Date.now(),
          text:text,
          completed:false,
        }
      ]) 
    }
    setText('')
  }
  function eliminar(id) {
    setTareas(tareas.filter(tarea=>tarea.id!==id))

  }
  function refresh(){
    setTareas(listaDeTareas)
  }

  return (
    <section className='flex gap-3 flex-col'>
      <form onSubmit={(e)=>{e.preventDefault(),agregar()}} className='flex w-full justify-center gap-3 mb-1' action="#">
        <input onChange={(e)=>{setText(e.target.value)}} value={text} className='p-2 w-2/3 text-black' type="text" placeholder='Ingresar nueva tarea' />
        <button type='submit' className='border border-white p-2 hover:text-black hover:bg-white'>Agregar tarea</button>
      </form>
      <button onClick={refresh} className='border-white border w-44 p-1 mx-auto hover:text-black hover:bg-white'>Regresar</button>

      <div className='grid grid-cols-3 gap-4 p-2'>
      {
        tareas.map(tarea => (
          <article key={tarea.id} className={tarea.completed ? 'relative p-4 rounded-xl border border-black bg-green-500': 'p-4 rounded-xl border border-black bg-red-300 relative'}>
            <div className='text-black'><strong>ID : </strong>{tarea.id}</div>
            <div className='text-nowrap text-black'><strong>Text : </strong>{tarea.text}</div>
            <div className={tarea.completed ? 'text-green-700' : 'text-red-500'}><strong>{tarea.completed ? 'Completed' : 'No completed'}</strong></div>
            <button onClick={() => cambiarCompleted(tarea.id)} className='border border-black hover:text-black hover:bg-white p-2 text-black mt-3'>{tarea.completed ? 'No completed' : 'Completed'}</button>
            <button onClick={()=> eliminar(tarea.id)} className='absolute top-0 end-0 mx-3 my-2 text-black'>x</button>
          </article>
        ))
      }  
      </div>
      
      
    </section>
  );
}
