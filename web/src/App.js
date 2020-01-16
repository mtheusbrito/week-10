import React from "react";
import "./App.css";
//Component:  Bloco isolado de Html, css e js , o qual nao interfere no restante da aplicacao
//Propriedade: Informacoes que um componente PAI passa para o componente FILHO
//Estado:
import "./global.css";
import "./Sidebar.css";
function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="username_github">Usuário o Github</label>
            <input name="github_username" id="username_github" required></input>
          </div>
          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>
          <div class="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>

          <button>Salvar</button>
        </form>
      </aside>
      <main></main>
    </div>
  );
}

export default App;
