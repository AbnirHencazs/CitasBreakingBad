import React, { useState, useEffect } from 'react';
import Cita from './Components/Cita';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display:flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .9s ease;
  :hover{
    cursor: pointer;
    background-size: 400px;
  }
`;


function App() {
  const [cita, setCita] = useState({});

  const handleClick = async e => {
    const req = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const promesa = await req.json();
    setCita(promesa[0]);
  }
  //Cargar una cita
  useEffect(() =>{
    handleClick();
  }, []);

  return (
    <Contenedor>
      <Cita
        cita={cita}/>
      <Boton
        onClick={handleClick}>
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
