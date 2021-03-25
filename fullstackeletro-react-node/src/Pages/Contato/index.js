                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  import React from "react";
// Eu faco o import do react para poder usar codigo jsx.
import {Link} from "react-router-dom";
import './contato.css';
import WhatsApp from '../../imgs/Contato/whatsapp_icon.png';
import Email from '../../imgs/Contato/email_icon.png';

function Contato() {
  // Um componente que na realidade eh uma PAGINA.

  let [mensagens, setMensagens] = React.useState([]);
  let [renderMensagens, setRenderMensagens] = React.useState(false);
  let [alert, setAlert] = React.useState(false);

  let [nomeState, setNome] = React.useState("");
  let [emailState, setEmail] = React.useState("");
  let [assuntoState, setAssunto] = React.useState("");                                                                                                                                                                                                            
  let [mensagemState, setMensagem] = React.useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    const url = "http://localhost:3333/mensagem"
    const response = await fetch(url);
    const data = await response.json();
    setMensagens(data);
    // Sempre a pagina carregar ou que o estado de renderStudent for alterado renderizar a pagina novamente.
}, [renderMensagens]);

  function mensagemRegister(event) {
    event.preventDefault();
    let form = {
      nome: nomeState,
      email: emailState,
      assunto: assuntoState,
      mensagem: mensagemState
    }
    const url = "http://localhost:3333/mensagem";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(form)
      })
        .then((response) => response.json())
        .then((dados) => {
          setRenderMensagens(!renderMensagens);
          setAlert(dados);
        })
    }

    setTimeout(async () => {setAlert(false)}, 10000);
    
  return (
    <div className="container mt-3">
      <h1 className="h1 text-center">Entre em contato conosco</h1>
      <div className="row"> 

        <div className="col">
          <div className="card text-center">
              <Link to="#">
                <img className="img-fluid card-img-top resize-img" src={WhatsApp} alt="WhatsApp"></img>
              </Link>
                <div className="card-body">
                  <h5 className="card-title">WhatsApp</h5>
                  <p className="card-text">(21) 3333-3333</p>
                  <a href="#!" className="btn btn-fs text-light">Contactar-nos</a>
                </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-center">
              <Link to="#">
                <img className="img-fluid card-img-top resize-img" src={Email} alt="Email"></img>
              </Link>
                <div className="card-body">
                  <h5 className="card-title">Email</h5>
                  <p className="card-text">fullstackeletro@dev.com</p>
                  <a href="#!" className="btn btn-fs text-light">Contactar-nos</a>
                </div>
            </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <form className="container" onSubmit={mensagemRegister}>
          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Nome:</span>
              </div>
              <input className="form-control" aria-describedby="nameHelp" type="text" name="nome" id="nome" placeholder="Exemplo: Matheus de Oliveira Silva" value={nomeState} onChange={event => setNome(event.target.value)}></input>
          </div>

          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">E-mail:</span>
              </div>
              <input className="form-control" type="email" name="email" id="email" placeholder="Exemplo: exemplo@exemplo.com" value={emailState} onChange={event => setEmail(event.target.value)}></input>
          </div>

          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Assunto:</span>
              </div>

              <select className="form-control" name="assunto" id="assunto" onChange={event => setAssunto(event.target.value)}>
                  <option value="elogio">Exemplo: Elogio</option>
                  <option value="elogio">Elogio</option>
                  <option value="relamacao">Relamacao</option>
                  <option value="duvida">Duvida</option>
                  <option value="profissional">Contato Profissional</option>
              </select>
          </div>

          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Assunto:</span>
              </div>
              <textarea className="form-control" name="mensagem" id="mensagem" cols="40" rows="2" placeholder="Exemplo: Otima lista de produtos" onChange={event => setMensagem(event.target.value)}></textarea>
          </div>

          <button className="btn btn-fs text-light form-control mb-3">Enviar</button>

          <h1 className="h1 text-center mt-3">Contatos enviados</h1>
        </form>

        {alert === true && 
                <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                    Comentario efetuado com sucesso!
                </div>
            }
        

            {mensagens.map((element) => {
                return (
                  // Dentro de um componente podemos ter vairos return(
                    <div key={element.id} className="card w-75 mt-4 mx-auto">
                      <ul class="list-group list-group-flush border border-danger">
                        <li class="list-group-item border-bottom-danger">Nome: {element.nome}</li>
                        <li class="list-group-item">E-mail: {element.email}</li>
                        <li class="list-group-item">Assunto: {element.assunto}</li>
                        <li class="list-group-item pb-3">Mensagem: {element.mensagem}</li>
                      </ul>
                    </div>
                );
            })}
      </div>
    </div>
  );
}

export default Contato;