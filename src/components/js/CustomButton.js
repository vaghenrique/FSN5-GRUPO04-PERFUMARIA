//Botão Personalizado:
import React from 'react';

const CustomButton = ({ label, onClick }) => {
    return (
        <button onClick={onClick}>{label}</button>
    );
};

export default CustomButton;
