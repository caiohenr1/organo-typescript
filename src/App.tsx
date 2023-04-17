import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Time';
// import Footer from './components/Footer';
import { ICollaborator } from './shared/types/ICollaborator';

const App = () => {

  const times = [
    {
        nome: 'Programação',
        corPrimaria: '#57C278',
        corSecundaria: '#D9F7E9',
    },
    {
        nome: 'Front-End',
        corPrimaria: '#82CFFA',
        corSecundaria: '#E8F8FF',
    },
    {
        nome: 'Data Sciense',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2',
    },
    {
        nome: 'Devops',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8',
    },
    {
        nome: 'UX e Design',
        corPrimaria: '#DB6EBF',
        corSecundaria: '#FAE9F5',
    },
    {
        nome: 'Mobile',
        corPrimaria: '#FFBA05',
        corSecundaria: '#FFF5D9',
    },
    {
        nome: 'Inovação e Gestão',
        corPrimaria: '#FF8A29',
        corSecundaria: '#FFEEDF',
    }
]

  const [colaboradores, setColaboradores] = useState<ICollaborator[]>([])

  const addNewCollaborator = (colaborador: ICollaborator) => {
    
    setColaboradores([...colaboradores, colaborador])
     
  }

  console.log(colaboradores);
  return (
    <div>
      <Banner urlImage='./imagens/banner.png' altText='Banner Organização Organo' />
      <Form 
        createNew={colaborador => 
        addNewCollaborator(colaborador)} 
        itensList={times.map((time) => {

        return time.nome
        
      })} />
      
      {times.map((time) => {
        return <Time  
                key= {time.nome} 
                teamName={time.nome}
                primaryColor={time.corPrimaria}
                secondaryColor={time.corSecundaria}
                collaborator={colaboradores.filter((colaborador) => {
                 return colaborador.time === time.nome
        })}/>
      })}
      {/* <Footer /> */}
    </div>
  )
}

export default App