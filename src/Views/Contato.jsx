import React from "react";

export default function Contato() {
    return (
    <>
        <main>
            <div class="container" id="boxForm">
                <h1 class="faleConosco">Fale Conosco </h1>
                <div class="box form-group">
                    <form style={{textAlign:"center"}}>
                        <input type="text" style={{fontSize:"12pt"}} class="form-control" id="name" name="name" size="30" placeholder="Nome Completo"/>
                        <br/><br/>
                        <input type="email" class="form-control" id="email" name="email" size="30" placeholder="E-mail" style={{fontSize:"12pt"}}/>
                        <br/><br/>
                        <input type="text" style={{fontSize:"12pt"}} class="form-control" id="tel" name="tel" size="30" placeholder="Telefone"/>
                        <br/><br/>
                        <textarea id="msg" name="msg" class="form-control" placeholder="Descrição" style={{fontSize:"16pt"}}rows="8" cols="33"></textarea>
                        <br/><br/>
                        <input type="submit" class="btn btn-primary" style={{fontSize:"16pt"}} name="enviar" value="Enviar"/>
                    </form>
                    <br/>
                </div>
            </div>
        </main> 
    </>    
    );
}