import { useEffect } from "react";

const Titulo = () => {

  useEffect(()=> {

    const mostrarTamañoVentana = () => {
      console.log("Ancho: ", window.innerWidth)
    }

    //declaramos el evento a escuchar
    window.addEventListener("resize", mostrarTamañoVentana)

    //cleanup effect
    return () => {
      window.removeEventListener("resize", mostrarTamañoVentana)
    }
  }, [])

  return (
    <>
      <h2 className="titulo">Saludos desde el componente Titulo!!!</h2>
    </>
  );
};

export default Titulo;
