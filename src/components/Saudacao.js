import React from "react";

function Saudacao({ nome }){

    function gerarSaudacao(algumNome){
       return `Olá ${algumNome}, tudo bem?`
    }

    return  <>
        {/* Renderização condicional */}
                {nome && <p>{gerarSaudacao(nome)}</p>} 
            </>
}


export default Saudacao;