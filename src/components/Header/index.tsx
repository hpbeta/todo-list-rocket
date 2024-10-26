import logoTipo from '../../assets/logo.svg'
import { ContainerHeader } from './style.tsx'

export function Header() {
    return(
        <ContainerHeader>
          <img src={logoTipo} alt="" />
        </ContainerHeader>
    )
}