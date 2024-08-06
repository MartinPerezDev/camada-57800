import { useEffect, useState } from 'react';

const EjemploContadorEventListener = () => {
  const [contador, setContador] = useState(1);

  const handleClickButton = () => {
    setContador((prevState) => prevState + 1);
  };

  useEffect(() => {
    const botonSumar = document.getElementById('botonSumar');

    botonSumar.addEventListener('click', handleClickButton);

    //esta funcion se ejecuta cuando nuestro componente se desmonta
    //eliminamos el evento
    return () => {
      botonSumar.removeEventListener('click', handleClickButton);
    };
  }, []);

  return (
    <div>
      <p>{contador}</p>
      <button id="botonSumar">+</button>
    </div>
  );
};
export default EjemploContadorEventListener;
