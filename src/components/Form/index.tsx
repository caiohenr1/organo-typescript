import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextField from "../TextField";
import "./Form.css";
import { ICollaborator } from "../../shared/types/ICollaborator";

interface FormProps {
    createNew: (collaborator : ICollaborator) => void,
    itensList: string[],
}

const Form = ( { createNew, itensList} :FormProps ) => {
    // const times = ["", "Programação", "Front-End", "Data Science", "Devops", "UX e Design", "Mobile", "Inovação e Gestão"];

    // STATES DE INPUT
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");
    const [data, setData] = useState("")

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
         createNew({
            nome,
            cargo,
            imagem,
            time,
            data,
        })

        setNome('')
        setCargo('')
        setImagem('')
        setData('')
    };

    return (
        <section className="formulario">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField 
                    label="Nome"
                    placeholder="Digite seu nome" 
                    required={true} 
                    valor={nome} 
                    changed={(valor) => setNome(valor)}
                />
                <TextField 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    required={true} 
                    valor={cargo} 
                    changed={(valor) => setCargo(valor)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    required={false}
                    valor={imagem} 
                    changed={(valor) => setImagem(valor)}
                />

                 <TextField
                    label="Data de entrada"
                    placeholder=""
                    required={true}
                    valor={data} 
                    changed={(valor) => setData(valor)}
                    type="date"
                />

                <Dropdown
                    label="Times"
                    itens={itensList}
                    required={true}
                    valor={time} 
                    changed={(valor) => setTime(valor)}
                />
                <Button>Criar card</Button>
            </form>
        </section>
    );
};

export default Form;
