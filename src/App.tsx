import { FormEvent, useState } from 'react';
import { Header } from './components/Header/index.js';
import { Form } from './components/Form/index.js';
import { CountTask } from './components/CountTask/index.js';
import { Tasks } from './components/Tasks/index.js';

interface Task {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {

  const [ taskText, setTaskText ] = useState('')
  const [ tasks, setTasks ] = useState<Task[]>([])

  function handleSubmit (e:FormEvent) {

    if(taskText === "") {
      alert('Digite uma tarefa')
      return
    }
   e.preventDefault()
    const newListTask = [
      ...tasks, { id: Math.random(), text: taskText, isChecked: false }
    ]
    setTasks(newListTask)
    setTaskText('')
  }

  function deleteTask(taskId: number) {
    const tasksFiltered = tasks.filter(item => item.id !== taskId)
    setTasks(tasksFiltered)
  }

  function taskFinished (taskId: number):void {
    const listTaskFinished = tasks.map(item => (
      item.id === taskId ?  {...item, isChecked: !item.isChecked}: item
    ))

    setTasks(listTaskFinished)
  }

  return (
    <>
      <Header />
      <Form 
      onSubmit={handleSubmit} 
      setTaskText={setTaskText} 
      taskText={taskText}
      />
      <CountTask tasks={tasks} />
      <Tasks 
      tasks={tasks} 
      taskFinished = {taskFinished} 
      deleteTask={deleteTask}  
      />
    </>
  )
}

export default App
