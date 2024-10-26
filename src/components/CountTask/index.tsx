import { ContainerCountTask } from "./style";
import { TaskProps } from "../../Tasksprops.tsx";

interface CountTaskProps {
    tasks: TaskProps[]  
}

export function CountTask({tasks}: CountTaskProps){

    const finishedCount = tasks.filter(item => item.isChecked).length
    
    return (
        <ContainerCountTask>
            <p>Tarefas criadas <span>{tasks.length}</span></p>
            <p>Concluídas <span>{finishedCount} de {tasks.length}</span></p>
        </ContainerCountTask>
    )
}