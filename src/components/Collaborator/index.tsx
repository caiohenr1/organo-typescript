import './Collaborator.css'

interface CollaboratorProps {
    nome: string
    cargo: string
    imagem: string
    data: string
    bg: React.CSSProperties
    
    
}

const Collaborator = ( { nome, cargo, imagem, bg, data } : CollaboratorProps) => {
    
    return (
        <div className='colaborador'  >
            <div className='cabecalho' style={bg}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <h5>{new Date(data).toLocaleDateString()}</h5>
                
               
            </div>
        </div>
    )
}

export default Collaborator