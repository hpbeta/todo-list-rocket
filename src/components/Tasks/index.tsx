import { FaTrashCan } from "react-icons/fa6";
import { ContainerListTask, Task } from "./style.tsx";
import { Empty } from "../Empty";
import { TaskProps } from "../../Tasksprops.tsx";

interface Tasks{
  tasks: TaskProps[],
  taskFinished: (taskId: number) => void,
  deleteTask: (taskId: number) => void
}

export function Tasks({tasks, taskFinished, deleteTask}:Tasks) {

    return(
    <ContainerListTask>
        {
        tasks.length > 0 ? (
          tasks.map(task => (
        <Task isChecked={task.isChecked} key={task.id}>
          <label  >
            <input onChange={() => taskFinished(task.id)} type="checkbox" />
              {task.text}
            <FaTrashCan onClick={() => deleteTask(task.id)} />
          </label>
        </Task>
          ))
        ) : <Empty />
        }
    </ContainerListTask>
    )
}