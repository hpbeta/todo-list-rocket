import imgEmpty from '../../assets/clipboard.svg'
import { EmptyContiner } from './style.tsx'

export function Empty() {
    return(
        <EmptyContiner>
            <img src={imgEmpty} alt="Imagem do componente quando não tiver nada na lista" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </EmptyContiner>
    )
}