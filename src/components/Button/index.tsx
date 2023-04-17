import { ReactElement } from 'react'
import './Button.css'

interface ButtonProps {
    children: ReactElement | string
}

const Button = ( { children }: ButtonProps ) => {
    return (
        <button className='btn'>
            {children}
        </button>
    )
}

export default Button