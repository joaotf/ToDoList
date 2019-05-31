import React, { Component } from "react";
import api from "../../services/api.js";

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
  };

  render() {
    return (
      <div className="work">
        <h2>Adicionar tarefa</h2>
        <input id="nome" name="nome" placeholder="Nome" />
        <br />
        <br />
        <input id="des" name="description" placeholder="Descrição" />
        <br />
        <br />
        <input id="dde" name="dde" placeholder="Data de Entrega" />
        <br />
        <br />
        <input id="url" name="url" placeholder="URL" />
        <br />
        <br />
        <button onClick={() => this.createStructure()}>Adicionar</button>
        <br />
        <br />
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}
