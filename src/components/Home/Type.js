import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desenvolvedor Web Full Stack",
          "Estudante de ADS · Una",
          "Fundador da Oreia Tech",
          "Back-End com Node.js & MySQL",
          "Buscando Estágio / Dev Júnior",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
