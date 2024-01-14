import { tareas } from '../utils/ListaDeTareas'

export function TaskList() {
  return (
    <section className='flex gap-3'>
      {
      tareas.map((tarea)=>(
        <article key={tarea.id} className={tarea.completed?'p-4 rounded-xl border border-black bg-green-500':'p-4 rounded-xl border border-black bg-red-300'}>
          <div>id: {tarea.id}</div>
          <div className='text-nowrap'>text: {tarea.text}</div>
          <div className={tarea.completed?'text-green-700':'text-red-500'}><strong>{tarea.completed?'Completed':'No completed'}</strong></div>
        </article>
      ))
      }
    </section>
  )
}
