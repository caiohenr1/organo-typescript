import { ICollaborator } from '../../shared/types/ICollaborator'
import Collaborator from '../Collaborator'
import './Time.css'

interface TimeProps {

    teamName: string,
    primaryColor: string,
    secondaryColor: string,
   
    collaborator: ICollaborator[],
    

}
const Time = ( { teamName, primaryColor, secondaryColor, collaborator} : TimeProps) => {

    const bg = {backgroundColor: secondaryColor}
    const titleBorder = { borderColor: primaryColor}
    const cardBg = {backgroundColor: primaryColor}

    
    
    return (
        
        (collaborator.length > 0) ?  <section className='time' style={bg}>
            <h3 style={titleBorder}>{teamName} </h3>

            <div className='colaboradore'>

            {collaborator.map( colaborador =>
                <Collaborator 
                    key={colaborador.nome}
                    imagem={colaborador.imagem}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo}
                    data={colaborador.data}
                    
                    bg={cardBg} />)}
               
            </div>
           
        </section>
        : <></>
    )
}

export default Time