import React, { Component } from "react";
import api from "../../services/api.js";

import "./styles.css"
import { Link } from "react-router-dom";

export default class Storage extends Component {
  state = {
    structures: []
  };

  createStructure = async () => {
    await api.post("/usuario", {
      nome: document.getElementById("nome").value,
      description: document.getElementById("des").value,
      date: document.getElementById("dde").value,
      url: document.getElementById("url").value
    });
    alert("Tarefa cadastrada com sucesso!");
  };

  render() {
    return (
      <div className="work">
        <h2 style={{
          color:"#1e90ff"
        }}>Adicionar tarefa</h2>
        <input id="nome" name="nome" placeholder="Nome" required />
        <br />
        <br />
        <input id="des" name="description" placeholder="Descrição" required />
        <br />
        <br />
        <input id="dde" name="dde" placeholder="Data de Entrega" required/>
        <br />
        <br />
        <input id="url" name="url" placeholder="URL" required/>
        <br />
        <br />
        <Link to="/" onClick={() => this.createStructure()}>
        <button id="adding">Adicionar</button>
        </Link>
      </div>
    );
  }
}
