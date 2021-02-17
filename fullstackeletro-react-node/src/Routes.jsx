import React from "react";
import {
    Switch,
    Route
  } from "react-router-dom";

import Contato from "./Pages/Contato";
import Index from "./Pages/Index/index.js";
import Lojas from "./Pages/Lojas";
import Pedidos from "./Pages/Pedidos";
import Produtos from './Pages/Produtos';

function Routes(){
    return(
        <Switch>
            {/* Pagina Inicial */}
            <Route exact path="/" component={Index}/>
            {/* Produtos */}
            <Route exact path="/produtos" component={Produtos}/>
            {/* Lojas */}
            <Route exact path="/lojas" component={Lojas}/>
            {/* Pedidos */}
            <Route exact path="/pedidos" component={Pedidos}/>
            {/* Contato */}
            <Route exact path="/contato" component={Contato}/>
        </Switch>
    );
}

export default Routes;