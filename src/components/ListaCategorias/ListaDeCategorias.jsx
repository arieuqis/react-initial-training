import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] };
    this._novasCategorias = this._novasCategorias.bind(this);
  }

  _handleInputEvent(e) {
    if (e.key === "Enter") {
      this.props.adicionarCategoria(e.target.value);
    }
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount(){
      this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicione uma categoria"
          onKeyUp={this._handleInputEvent.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
