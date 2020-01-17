import React, { useEffect, useState } from "react";
import "./App.css";
//Component:  Bloco isolado de Html, css e js , o qual nao interfere no restante da aplicacao
//Propriedade: Informacoes que um componente PAI passa para o componente FILHO
//Estado:
import "./global.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="username_github">Usuário o Github</label>
            <input name="github_username" id="username_github" required></input>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                id="latitude"
                required
                value={latitude}
              ></input>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                id="longitude"
                required
                value={longitude}
              ></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://i.picsum.photos/id/1014/6016/4000.jpg"
                alt="Dev"
              />
              <div className="user-info">
                <strong>Nome Aleatório</strong>
                <span>ReactJS, React Native, Node.Js</span>
              </div>
            </header>
            <p>
              Adicione uma bio em seu perfil para compartilhar informações sobre
              si mesmo com outros usuários GitHub.
            </p>
            <a href="https://github.com/mtheusbrito">
              Acessar perfil no Github
            </a>
          </li>{" "}
          <li className="dev-item">
            <header>
              <img
                src="https://i.picsum.photos/id/1014/6016/4000.jpg"
                alt="Dev"
              />
              <div className="user-info">
                <strong>Nome Aleatório</strong>
                <span>ReactJS, React Native, Node.Js</span>
              </div>
            </header>
            <p>
              Adicione uma bio em seu perfil para compartilhar informações sobre
              si mesmo com outros usuários GitHub.
            </p>
            <a href="https://github.com/mtheusbrito">
              Acessar perfil no Github
            </a>
          </li>{" "}
          <li className="dev-item">
            <header>
              <img
                src="https://i.picsum.photos/id/1014/6016/4000.jpg"
                alt="Dev"
              />
              <div className="user-info">
                <strong>Nome Aleatório</strong>
                <span>ReactJS, React Native, Node.Js</span>
              </div>
            </header>
            <p>
              Adicione uma bio em seu perfil para compartilhar informações sobre
              si mesmo com outros usuários GitHub.
            </p>
            <a href="https://github.com/mtheusbrito">
              Acessar perfil no Github
            </a>
          </li>{" "}
          <li className="dev-item">
            <header>
              <img
                src="https://i.picsum.photos/id/1014/6016/4000.jpg"
                alt="Dev"
              />
              <div className="user-info">
                <strong>Nome Aleatório</strong>
                <span>ReactJS, React Native, Node.Js</span>
              </div>
            </header>
            <p>
              Adicione uma bio em seu perfil para compartilhar informações sobre
              si mesmo com outros usuários GitHub.
            </p>
            <a href="https://github.com/mtheusbrito">
              Acessar perfil no Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
