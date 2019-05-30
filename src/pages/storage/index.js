import React, { Component} from "react";

import api from "../../services/api.js";

import { Link } from 'react-router-dom'



export default class Storage extends Component {
    
state = {
    structures: [],
};


 createStructure  = async () => {
    let tarefa = 
  {      
        
 }
    tarefa.title = document.getElementById('nome').value
    tarefa.description=document.getElementById('des').value
    tarefa.date = document.getElementById('dde').value
    tarefa.url = document.getElementById('url').value
    
    try {
        const response =  await api.post("/usuario",tarefa)
        alert("Tarefa cadastrada com sucesso!")   
         
    } catch (error) {
        new Error("Não foi possível adicionar")
    }
}

  render() {
    return (
                <div className="work">
                    <h2>Adicionar tarefa</h2>
                    <input id="nome" name="nome" placeholder="Nome"></input>
                    <br />
                    <br />
                    <input id="des"name="description" placeholder="Descrição"></input>
                    <br />
                    <br />
                    <input id="dde"name="dde" placeholder="Data de Entrega"></input>
                    <br />
                    <br />
                    <input id="url" name="url" placeholder="URL" ></input>
                    <br />
                    <br />
                    <button onClick={() => this.createStructure()}>Adicionar</button>
                    <br />
                    <br />
                    <Link to="/">Voltar</Link>
                </div>
        )
    }
}
