import React from "react";

export default function Viagem() {
    return (
        <>
        <div className="jumbotron card card-image" style={{backgroundColor:"lightskyblue"}}>
            <h1 id="Viagemh1">Pacotes imbátiveis</h1>
            <p id="ViagemP">
                Confira abaixo e não deixe para depois.
            </p>
        </div>
        
        <main>
            <div className="container" id="viagem">
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" style={{fontSize:"15pt"}}/>
                    <label class="custom-control-label" for="customRadioInline1">Ida</label>
                </div>
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" style={{fontSize:"15pt"}}/>
                <label class="custom-control-label" for="customRadioInline2">Ida e Volta</label>
            </div>
            <form>
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Origem" style={{fontSize:"15pt"}}/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Destino" style={{fontSize:"15pt"}}/>
                    </div>
                </div>
                <br></br>
                <div class="row" style={{alingItems:"center"}}>
                    <div class="col">
                        <button type="button" class="btn btn-primary">Buscar</button>
                    </div>   
                </div>
            </form>
            </div>
        </main>
        </>
    );
}