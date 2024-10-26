import { CiCirclePlus } from "react-icons/ci";
import { ButtonCreate, ContainerForm } from "./style.tsx";

interface FormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    setTaskText: (text: string) => void,
    taskText: string
}

export function Form({ onSubmit, setTaskText, taskText } :FormProps) {
    return(
        <ContainerForm onSubmit={onSubmit}>
            <input 
            value={taskText}
            required
            onChange={(e) => setTaskText(e.target.value)} 
            type="text" 
            placeholder='Adicione uma tarefa' />
            <ButtonCreate>Criar<CiCirclePlus /></ButtonCreate>
       </ContainerForm>
    )
}