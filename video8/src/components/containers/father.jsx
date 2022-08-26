import React from "react";
import Child from "../pure/child";

export default function Father() {

    function datosRecibidos(datos) {
        console.log(`datos del hijo: ${datos}`);
    }


  return (
    <div>
      <Child envio={datosRecibidos}></Child>
    </div>
  );
}
