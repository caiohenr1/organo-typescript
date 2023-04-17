import "./Dropdown.css";

interface DropdownProps {
    label: string,
    required: boolean,
    valor: string,
    changed: (valor: string) => void,
    itens: string[]
}


const Dropdown = ( { label, required, valor, changed, itens } : DropdownProps) => {
    return (
        <div className="drop-list">
            <label>{label}</label>
            <select 
                onChange={(event) => 
                changed(event.target.value)} 
                required={required} 
                value={valor}>

                <option value=''></option>

                {itens.map((item) => {
                    return <option key={item}>{item}</option>;
                })}
            </select>
        </div>
    );
};

export default Dropdown;
