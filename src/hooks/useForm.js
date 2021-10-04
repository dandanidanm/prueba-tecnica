import { useState } from 'react';

export const useForm = ( initialState = {} ) => {
    
    const [formValue, setValues] = useState(initialState);

    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target;
        setValues({
            ...formValue,
            [ name ]: type === 'checkbox' ? checked : value 
        });

    }

    return [ formValue, handleInputChange ];
}