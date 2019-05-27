import React,{ Component } from "react"

import api from "../../services/api.js"

import "./styles.css"

export default class Main extends Component{
    state = {
        structures:[]
    }
    
    componentDidMount(){
        this.loadStructures();
    }
    
    loadStructures = async () => {
        const response = await api.get('/usuario')

        this.setState({ structures : response.data });
    }

    

    render(){
        
        return ( 
            
            <div className="list-all">
                {this.state.structures.map(structure => (
                    <article key={structure._id}>
                        <strong>{structure.title}</strong>
                        <p>{structure.description}</p>
                        <p>{structure.date}</p>
                        <a href={structure.url}>Acessar</a>

                    </article>
                
                ))}
                
            </div>
            
        );
    }
}