import React from "react";
// Eu faco o import do react para poder usar codigo jsx.
import {Link} from "react-router-dom";
// import fogao1 from '../../imgs/Produtos/fogao1.jpeg';
import './produtos.css';


function Produtos() {
  // Um componente que na realidade eh uma PAGINA.

  let [produtos, setProdutos] = React.useState([]);
  let [renderProdutos, setRenderProdutos] = React.useState(false);

  React.useEffect(async () => {
    const url = "http://localhost/dashboard/PHP%20Projects/fullstackeletro-react-php/Backend/Produtos/index.php";
    const response = await fetch(url);
    const data = await response.json();
    setProdutos(data);
    console.log(data);
  }, [renderProdutos]);

    function enter(event) {
        const img = event.target
        img.className = "card-img-top border border-info";
    }

    function out(event) {
        const img = event.target
        img.className = "card-img-top img-thumbnail";
    }

    function mostrar_categoria(categorias) {
        let elementos = document.getElementsByClassName('box-item');
        for(let i = 0; i < elementos.length; i++){
            if (categorias === elementos[i].id) {
                elementos[i].style="display: inline-block";
            } else {
                elementos[i].style="display:none";
            }
        }
    }

    function mostrar_todos() {
    let elementos = document.getElementsByClassName('box-item');
    for (let i=0; i<elementos.length; i++) {
        elementos[i].style = "display:inline-block";
        }
    }

  return (
    <div className="container-fluid m-3">
        <div className="row">
            <div className="list-group col-3 d-block categorias">
            <h3 className="h3">Categoria de Produtos</h3>
                <ul>
                    <li className="list-group-item" onClick={mostrar_todos}>Todos os Produtos (12)</li>
                    <li className="list-group-item" onClick={() => mostrar_categoria('geladeira')} >Geladeiras (3)</li>
                    <li className="list-group-item" onClick={() => mostrar_categoria('fogao')} >Fogoes (2)</li>
                    <li className="list-group-item" onClick={() => mostrar_categoria('miroondas')} >Microondas (3)</li>
                    <li className="list-group-item" onClick={() => mostrar_categoria('lavaroupas')} >Lava Roupas (3)</li>
                    <li className="list-group-item" onClick={() => mostrar_categoria('lavaloucas')} >Lava-Loucas (1)</li>
                </ul>
            </div>

            {produtos.map(element => {
                console.log(produtos)
                return (
                    <div className="box-item col-9 col-sm-12 col-md-6 col-lg-3 d-inline-block justify-content-sm-center">
                        <div className=" card d-inline-block ml-5">
                            <div className="card-body" key={element.idproduto}>
                                <img className="card-img-top" onMouseEnter={enter} onMouseLeave={out} src={require(`../../imgs/Produtos/${element.imagem}`).default} alt={element.descricao}></img>

                                <h5 className="card-title">{element.descricao}</h5>
                                <p className="card-text preco">De: <strike>R$ {element.preco}</strike></p>
                                <p className="card-text">Por: R$ {element.precofinal}</p>
                                <a className="btn btn-fs text-light" href="#!">Acessar produto</a>
                            </div>
                        </div>
                    </div>
                 )})}
        </div>
    </div>
  );
}

export default Produtos;