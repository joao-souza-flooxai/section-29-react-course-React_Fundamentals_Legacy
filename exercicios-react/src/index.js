import React from "react";
import ReactDOM from 'react-dom';
import Primeiro from "./components/PrimeiroComponent";
import {CompA, CompB} from "./components/DoisComponents"
import MultiElementos from "./components/MultiElementos";
import FamiliaSilva from "./components/FamiliaSilva";
import Familia from "./components/Familia";
import Membro from "./components/Membro";
import ComponentComFuncao from "./components/ComponentComFuncao";
import Pai from "./components/Pai";
import ComponenteClasse from "./components/ComponentClasse";
import Contador from "./components/Contador";
import Hooks from "./components/Hooks";


const elemento = document.getElementById('root');
ReactDOM.render
( 
  <div>
    <h1>Olá</h1>, 
    <Primeiro value=": propriedade veio do index!"/>
    <CompA valor="Ola eu sou A"/>
    <CompB valor="Ola eu sou B"/>
    <MultiElementos/>
    <FamiliaSilva sobrenome=" Silva"/>
    <Familia sobrenome="Almeida">
     <Membro nome="José" />
      <Membro nome="Kately" />
      <Membro nome="Marcos" />
      <Membro nome="Mauricio" />
    </Familia>
    <ComponentComFuncao/>
    <Pai/>
    <ComponenteClasse value="Sou um componente de classe com propriedades e comunicação direta."/>
    <Contador numeroInicial={0}/>
    <Hooks/>
  </div>,
  elemento
);