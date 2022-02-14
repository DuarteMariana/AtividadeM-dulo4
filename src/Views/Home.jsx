import React from "react";


export default function Home() {
    return (
        <>
        <main >
            <div class="container" id="boxForm" style={{alingItems:"center"}}>
                <img src="./img/worldredimensionado.jpg" alt="world" align="center" height="100%" width="100%"/>
            </div>
            <div className="jumbotron">
                <div class="textinicial">
                    <h1 id="titulo"><strong>Quem somos</strong></h1>
                        <p>A World é uma agência de viagens e operadora turística nacional e internacional.<br></br>
                        Estamos ligados à fornecedores especialmente selecionados para garantir a qualidade dos serviços aos cliente mais exigentes.<br></br>Nossa maior missão é tornar a sua viagem cada vez mais simples, pois nascemos para conectar pessoas a seus sonhos, proporcionando a melhor experiência a um preço acessível.</p> 
                </div>
            </div>    
        </main>    
        </>    
    );
}