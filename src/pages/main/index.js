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
  };

  excludeStructures = async id => {
    await api.delete("/usuario/" + id);
    alert("Tarefa excluída com sucesso!");
    this.loadStructures();
  };

  handleAction = (url) => {
  window.location.href = `https://${url}`
  }
  
  render() {
    return (
      
      <div className="list-all">
        <Link to="/add"><button id="adding">Adicionar tarefa!</button></Link>
        <br />
        <br />
        {this.state.structures.map(structure => (
          <article key={structure._id}>
            <strong>{structure.title}</strong> 
            <br />
            <br />
            
            <p>{structure.description}</p>
            <p>{structure.date}</p>
            <a onClick={() => this.handleAction(structure.url)}>Acessar</a>
            <Link to={`/update/${structure._id}`}>Editar</Link>
            <button onClick={() => this.excludeStructures(structure._id)}>
              Feito
            </button>
          </article>
        ))}
      </div>
    
    );
  }
}
