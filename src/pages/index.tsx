import Azul from "@/components/azul";
import Rojo from "@/components/rojo";
import { useState } from "react";

export default function Home() {
  const [numero, setnumero] = useState(1);

  function increment() {
    setnumero(numero + 1);
  }

  return (
    <div>
      <h1>Home</h1>
      <h2 onClick={increment}>incrementar</h2>
      <p>{numero}</p>
      <Rojo/>
      <Azul text="pepe"/>
    </div>
  );
}
