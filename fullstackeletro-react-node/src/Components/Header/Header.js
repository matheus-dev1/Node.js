import React from "react";
import {Link} from "react-router-dom";
import '../../App.css';
import './Header.css';
import Logo from "../../imgs/Header/logo.png"

function Header(){
    return(
        // Header Responsivo e da cor vermelha!
        <nav className="navbar navbar-expand-lg navbar-light bg-danger Header JustifyHeader">
                <Link to="/"><img className="img-fluid mr-5" src={Logo} width="100" height="70"
                alt="Logo Full Stack Eletro"></img></Link>
            
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
                </button>

            {/* Barra de Navegacao / Header */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto justify-content-center bg-danger">
                    <li className="nav-item active">
                        <Link to="/produtos" className="nav-link text-white">
                            Produtos 
                                <span className="sr-only">
                                    (current)
                                </span>
                        </Link>
                    </li>

                    <li className="nav-item active">
                        <Link to="/lojas" className="nav-link text-white">
                            Nossas Lojas
                        </Link>
                    </li>

                    <li className="nav-item active">
                        <Link to="/pedidos" className="nav-link text-white">
                            Pedidos
                        </Link>
                    </li>

                    <li className="nav-item active">
                        <Link to="/contato" className="nav-link text-white">
                            Contatos
                        </Link>
                    </li>
                </ul>
        
            {/* Input de Pesquisa e Botao para pesquisar */}
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar..." aria-label="Search"></input>
                    <button className="btn btn-outline-light text-white my-2 my-sm-0" type="submit">Pesquisar</button>
                </form>
            </div>
        </nav>
    );
}

export default Header;
