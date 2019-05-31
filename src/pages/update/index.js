import React, { Component } from "react";

import api from "../../services/api.js";
import { Link } from "react-router-dom";

export default class Update extends Component {
  state = {
    structures: []
  };

  editStructure = async () => {
    let doidao = window.location.pathname.split("/");
    let doidao2 = doidao[2];

    await api.put(`/usuario/${doidao2}`, {
      title: document.getElementById("nome").value,
      description: document.getElementById("des").value,
      date: document.getElementById("dde").value,
      url: document.getElementById("url").value
    });
    alert("Tarefa editada com sucesso!");
  };

  render() {
    return (
      <div className="update-work">
        <h2>Editar tarefa</h2>
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
        <Link to="/" onClick={() => this.editStructure()}>
          Editar
        </Link>
      </div>
    );
  }
}
