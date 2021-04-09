import React, { Dispatch, SetStateAction } from 'react';

import { FormInputContainer } from "./form-input.styles";

interface FormInputProps {
    label: string
    isPassword?: boolean,
    value: string,
    handleChange: Dispatch<SetStateAction<string>>
}

const FormInput: React.FC<FormInputProps> = ({label, value, isPassword, handleChange}) => {
    return (
        <FormInputContainer>
            <input type={isPassword ? 'password' : 'text'} name={label} value={value} onChange={event => handleChange(event?.target.value)}/>
            
            <label className={value.length ? 'shrink label' : 'label' }>{label}</label>
        </FormInputContainer>
    );
};

export default FormInput;