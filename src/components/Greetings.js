import React from "react";

function Greetings({lang, children}) {
   console.log(lang, children);
    return (
        <div>
           {lang === "de" && <p>Hallo {children}</p>}
           {lang === "fr" && <p>Bonjour {children}</p>}
           {lang === "es" && <p>Hola {children}</p>}
           {lang === "en" && <p>Hello {children}</p>}
        </div>
    )
}

export default Greetings;