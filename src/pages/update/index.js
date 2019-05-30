import React, { Component} from "react";

import api from "../../services/api.js";





  
export default class Update extends Component {
    
state = {
    structures: []
};
    
  render() {
    return (
        <div className="update-work">
            <h2>Adicionar tarefa</h2>
            <input placeholder="Nome" required ></input>
            <br />
            <input placeholder="Descrição" required ></input>
            <br />
            <input placeholder="Data de Entrega" required ></input>
            <br />
            <input placeholder="URL" required ></input>
            <br />
            <button>Adicionar</button>
        </div>
        )
    }
}
