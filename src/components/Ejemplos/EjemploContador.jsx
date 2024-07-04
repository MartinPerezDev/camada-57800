import { useState, useEffect } from "react";
import Contador from "./Contador";
import Titulo from "./Titulo";

const EjemploContador = () => {
  const [contador, setContador] = useState(1);
  const [switchButton, setSwitchButton] = useState(true)

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const cambiarValorToggle = () => {
    setSwitchButton( !switchButton )
  }

  //se ejecuta solo al montar el componente
  //ej: llamadas a api, suscripciones a eventListener
  useEffect( () => {
    console.log("1er useEffect")
  }, [] )

  //se ejecuta en el montaje y cada vez "switchButton" cambie
  //ej: para realizar acciones especificas cuando una variable dependiente cambie
  useEffect( () => {
    console.log("2do useEffect")
  }, [switchButton] )

  //se ejecuta en el montaje y cada vez que se actualice cualquier estado de mi componente
  //ej: operaciones globales de monitoreo o registro, actualizaciones generales del componente
  useEffect( () => {
    console.log("3er useEffect")
  })

  return (
    <div>
      <Contador contador={contador} aumentarContador={aumentarContador} />

      <p>Valor Toggle: {switchButton.toString()} </p>
      <button onClick={cambiarValorToggle}>Cambiar valor toggle</button>

      {
        switchButton && <Titulo />
      }
    </div>
  );
};
export default EjemploContador;
