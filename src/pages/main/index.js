import React, { Component } from "react";

import api from "../../services/api.js";

import "./styles.css";

var Confirm = require("react-confirm-bootstrap");

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
  };

  excludeStructures = async id => {
    const response = await api.delete("/usuario/" + id);
    this.loadStructures();
  };

  render() {
    return (
      <div className="list-all">
        {this.state.structures.map(structure => (
          <article key={structure._id}>
            <strong>{structure.title}</strong>
            <p>{structure.description}</p>
            <p>{structure.date}</p>
            <a href={structure.url}>Acessar</a>
            <button
              title="Feito"
              onClick={
                <Confirm
                  onConfirm={this.excludeStructures(structure._id)}
                  body="Tem certeza que você deseja excluir?"
                  confirmText="Confirmar"
                  title="Deletar tarefa"
                >
                  <button>Deletar</button>
                </Confirm>
              }
            />
          </article>
        ))}
      </div>
    );
  }
}
