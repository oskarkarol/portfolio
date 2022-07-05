import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "📧 kontakt@oskarkarol.de",
          "🐧 LAMP Stack Developer",
          "ASP.NET Developer",
          "🐧 Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
