import "./App.css";
import { useState } from "react";

const App = () => {
  const reyesGodos = [
    {
      rey: "Ataúlfo",
      aficion: "comer toros sin pelar"
    },
    {
      rey: "Recesvinto",
      aficion: "leer a Hegel en arameo"
    },
    {
      rey: "Teodorico",
      aficion: "la cría del escarabajo en almíbar"
    }
  ];

  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState();

  const cambio = () => {
    setContador(contador + 1);
    if (contador + 1 >= reyesGodos.length) {
      setContador(0);
    }

    setMensaje(
      <h2>
        La aficion principal de{" "}
        <span className="rojo">{reyesGodos[contador].rey}</span> es{" "}
        <span className="verde">{reyesGodos[contador].aficion}</span>
      </h2>
    );
  };

  return (
    <>
      <button onClick={cambio}>Ver siguiente</button>
      <div>{mensaje}</div>
    </>
  );
};
export default App;
