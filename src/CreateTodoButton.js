import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  
  const onClickButton = (msg) => {
    alert("Aqui se deberia abrir el modal!");
  }
  
  return (
    <button 
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
