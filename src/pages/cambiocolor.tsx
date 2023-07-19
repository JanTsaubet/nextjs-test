import { useEffect, useState } from "react";

const Cambiocolor = () => {
  const [numero, setNumero] = useState(1);
  const [color, setColor] = useState("red");

    function getRandomInteger(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

  function generateNumber() {
    setNumero(getRandomInteger(1,100));
  }

  useEffect(() => {
    console.log(numero);
    
    if (numero % 2 === 0) setColor("red");
    else setColor("blue");
    
  }, [numero]);
  
  

  return (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      <h1 onClick={generateNumber}>CambioColor</h1>
    </div>
  );
};

export default Cambiocolor;
