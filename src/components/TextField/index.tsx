import "./TextField.css";

interface TextFieldProps {
    label: string,
    placeholder: string,
    required: boolean,
    valor: string,
    changed: (value: string) => void,
    type?: 'text' | 'password' | 'date' | 'email' | 'number'
    
}


const TextField = ( { label, placeholder, required, valor,  changed, type='text' }: TextFieldProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changed(event.target.value);
    };

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input 
                placeholder={placeholder} 
                required={required} 
                value={valor} 
                onChange={handleInputChange} 
                type={type}
                />
                
        </div>
    );
};

export default TextField;
