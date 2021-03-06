import React, { Component } from "react";

import api from "../../services/api.js";
import "./styles.css"
import { Link } from "react-router-dom";

export default class Update extends Component {
  state = {
    structures: []
  };

  loadStructure = async () => {
    let doidao = window.location.pathname.split("/");
    let doidao2 = doidao[2];

    const response = await api.get(`/usuario/${doidao2}`)
    this.setState({ structures:response.data });
  }

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
        <h2 style={{
          color:"#1e90ff"
        }}>Editar tarefa</h2>
        <input id="nome" value={response.title} name="nome" placeholder="Nome" />
        <br />
        <br />
        <input id="des" value = {response.description} name="description" placeholder="Descrição" />
        <br />
        <br />
        <input id="dde" value={response.date} name="dde" placeholder="Data de Entrega" />
        <br />
        <br />
        <input id="url" value={response.url} name="url" placeholder="URL" />
        <br />
        <br />
        <Link to="/" onClick={() => this.editStructure()}>
        <button id="update">Editar</button>
        </Link>
      </div>
    );
  }
}
