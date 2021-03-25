import React from "react";
// Eu faco o import do react para poder usar codigo jsx.
import './pedidos.css';

function Pedidos() {
  // Um componente que na realidade eh uma PAGINA.
  let [pedidos, setPedidos] = React.useState([]);
  let [renderPedidos, setRenderPedidos] = React.useState(false);
  let [alert, setAlert] = React.useState(false);

  let [nomeState, setNome] = React.useState("");
  let [enderecoState, setEndereco] = React.useState("");
  let [telefoneState, setTelefone] = React.useState(0);
  let [produtoState, setProduto] = React.useState("");
  let [valor_uniState, setValor_uni] = React.useState(0);
  let [qtd_produtoState, setQtd_produto] = React.useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    const url = "http://localhost:3333/pedidos";
    const response = await fetch(url);
    const data = await response.json();
    setPedidos(data);
  }, [renderPedidos]);

  function pedidosRegister(event){
    event.preventDefault();
    let form = {
      nome: nomeState,
      endereco: enderecoState,
      telefone: telefoneState,
      produto: produtoState,
      valor_uni: valor_uniState,
      qtd_produto: qtd_produtoState
    }
    const url = "http://localhost:3333/pedidos";
    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(form)
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
              <input className="form-control" aria-describedby="nameHelp" type="text" name="nome" id="nome" placeholder="Exemplo: Matheus de Oliveira Silva"value={nomeState} onChange={event => setNome(event.target.value)}></input>
          </div>

          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Endereco:</span>
              </div>
              <input className="form-control" type="text" name="endereco" id="endereco" placeholder="Exemplo: Rua Tiradentes, 1837" value={enderecoState} onChange={event => setEndereco(event.target.value)}></input>
          </div>

          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Telefone:</span>
              </div>
              <input className="form-control" type="number" name="telefone" id="telefone" placeholder="Exemplo: 11 969699509" value={telefoneState} onChange={event => setTelefone(event.target.value)}></input>
          </div>

          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Produto:</span>
              </div>
              <input className="form-control" type="text" name="produto" id="produto" placeholder="Exemplo: Maquina de lavar, Brastemp" value={produtoState} onChange={event => setProduto(event.target.value)}></input>
          </div>

          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Valor Unitario - R$:</span>
              </div>
              <input className="form-control" type="number" name="valor_uni" id="valor_uni" placeholder="Exemplo: 100.99" value={valor_uniState} onChange={event => setValor_uni(event.target.value)}></input>
          </div>

          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Quantidade:</span>
              </div>
              <input className="form-control" type="number" name="qtd_produto" id="qtd_produto" placeholder="Exemplo: 5" value={qtd_produtoState} onChange={event => setQtd_produto(event.target.value)}></input>
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
                    <div key={element.idpedidos} className="card w-75 mt-4 mx-auto">
                      <ul className="list-group list-group-flush border border-danger">
                        <li className="list-group-item border-bottom-danger">Nome: {element.nome_cli}</li>
                        <li className="list-group-item border-bottom-danger">Endereco: {element.endereco}</li>
                        <li className="list-group-item border-bottom-danger">Telefone: {element.telefone}</li>
                        <li className="list-group-item border-bottom-danger">Produto: {element.produto}</li>
                        <li className="list-group-item border-bottom-danger">Valor Unitario: {element.valor_uni}</li>
                        <li className="list-group-item border-bottom-danger">Quantidade: {element.qtd_prod}</li>
                        <li className="list-group-item border-bottom-danger">Valor Total: {element.valor_total}</li>
                      </ul>
                    </div>
                );
            })}
    </div>
  );
}

export default Pedidos