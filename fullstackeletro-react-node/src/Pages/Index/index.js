import React from "react";
// Eu faco o import do react para poder usar codigo jsx.
import '../../App.css';
import './index.css';

function Index() {
  // Um componente que na realidade eh uma PAGINA.
  return (
    <div className="MainContent  JustifyTitle  container-fluid a">
        <div className="row TitleIndex">FULL STACK ELETRO</div>
    </div>
  );
}

export default Index;