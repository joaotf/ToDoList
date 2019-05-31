import React, { Component } from "react";

import api from "../../services/api.js";

import { Link } from "react-router-dom";

import "./styles.css";

export default class Main extends Component {
  state = {
    structures: []
  };

  componentDidMount() {
    this.loadStructures();
  }

  loadStructures = async () => {
    const response = await api.get("/usuario");

    this.setState({ structures: response.data });
    this.loadStructures();
    alert("Todas as tarefas foram carregadas");
  };

  excludeStructures = async id => {
    await api.delete("/usuario/" + id);
    this.loadStructures();
    alert("Tarefa excluída com sucesso!");
  };

  render() {
    return (
      <div className="list-all">
        <Link to="/add">Adicionar tarefa!</Link>
        <br />
        <br />
        {this.state.structures.map(structure => (
          <article key={structure._id}>
            <strong>{structure.title}</strong>
            <p>{structure.description}</p>
            <p>{structure.date}</p>
            <a href={structure.url}>Acessar</a>
            <a
              title="Feito"
              onClick={() => this.excludeStructures(structure._id)}
            >
              Feito
            </a>
          </article>
        ))}
      </div>
    );
  }
}
