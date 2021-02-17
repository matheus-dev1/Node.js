import React from "react";
// Eu faco o import do react para poder usar codigo jsx.
import {Link} from "react-router-dom";
import './pedidos.css';

function Pedidos() {
  // Um componente que na realidade eh uma PAGINA.
  let [pedidos, setPedidos] = React.useState([]);
  let [renderPedidos, setRenderPedidos] = React.useState(false);
  let [alert, setAlert] = React.useState(false);

  React.useEffect(async () => {
    const url = "http://localhost/dashboard/PHP%20Projects/fullstackeletro-react-php/Backend/Pedidos/index.php";
    const response = await fetch(url);
    const data = await response.json();
    setPedidos(data);
    console.log(data)
  }, [renderPedidos]);

  function pedidosRegister(event){
    event.preventDefault();
    let formData = new FormData(event.target);
    const url = "http://localhost/dashboard/PHP%20Projects/fullstackeletro-react-php/Backend/Pedidos/register-pedido.php";

    fetch(url, {
      method: "POST",
      body: formData
    })
      .then((response) => response.json())
      .then((dados) => {
        setRenderPedidos(!renderPedidos);
        setAlert(dados);
      })
  }

  setTimeout(async () => {setAlert(false)}, 10000);

  return (
    <div className="container mt-3">
    <h1 className="h1 text-center">Fazer um pedido</h1>

      <div className="row justify-content-center">
        <form className="container" onSubmit={pedidosRegister}>

          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Nome:</span>
              </div>
              <input className="form-control" aria-describedby="nameHelp" type="text" name="nome" id="nome" placeholder="Exemplo: Matheus de Oliveira Silva"></input>
          </div>

          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Endereco:</span>
              </div>
              <input className="form-control" type="text" name="endereco" id="endereco" placeholder="Exemplo: Rua Tiradentes, 1837"></input>
          </div>

          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Telefone:</span>
              </div>
              <input className="form-control" type="number" name="telefone" id="telefone" placeholder="Exemplo: 11 969699509"></input>
          </div>

          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Produto:</span>
              </div>
              <input className="form-control" type="text" name="produto" id="produto" placeholder="Exemplo: Maquina de lavar, Brastemp"></input>
          </div>

          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Valor Unitario - R$:</span>
              </div>
              <input className="form-control" type="number" name="valor_uni" id="valor_uni" placeholder="Exemplo: 100.99"></input>
          </div>

          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Quantidade:</span>
              </div>
              <input className="form-control" type="number" name="qtd_produto" id="qtd_produto" placeholder="Exemplo: 5"></input>
          </div>

          <button className="btn btn-fs text-light form-control mb-3">Enviar</button>

          <h1 className="h1 text-center mt-3">Pedidos Enviados</h1>
        </form>
      </div>

      {alert === true && 
                <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                    Pedido efetuado com sucesso!
                </div>
            }
        
            {pedidos.map((element) => {
                return (
                  // Dentro de um componente podemos ter vairos return(
                    <div key={element.id} className="card w-75 mt-4 mx-auto">
                      <ul class="list-group list-group-flush border border-danger">
                        <li class="list-group-item border-bottom-danger">Nome: {element.nome_cli}</li>
                        <li class="list-group-item border-bottom-danger">Endereco: {element.endereco}</li>
                        <li class="list-group-item border-bottom-danger">Telefone: {element.telefone}</li>
                        <li class="list-group-item border-bottom-danger">Produto: {element.produto}</li>
                        <li class="list-group-item border-bottom-danger">Valor Unitario: {element.valor_uni}</li>
                        <li class="list-group-item border-bottom-danger">Quantidade: {element.qtd_prod}</li>
                        <li class="list-group-item border-bottom-danger">Valor Total: {element.valor_total}</li>
                      </ul>
                    </div>
                );
            })}
    </div>
  );
}

export default Pedidos;