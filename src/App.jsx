import "./App.css";
import React from "react";

import Card from "./components/layout/Card";

import Mega from "./components/mega/Mega";
import Counter from "./components/counter/Counter";
import Input from "./components/form/Input";
import IndirectParent from "./components/communication/IndirectParent";
import DirectParent from "./components/communication/DirectParent";
import UserInfo from "./components/conditional/UserInfo";
import EvenOrOdd from "./components/conditional/EvenOrOdd";
import ProductsTable from "./components/loop/ProductsTable";
import StudentList from "./components/loop/StudentList";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import Random from "./components/basics/Random";
import Fragment from "./components/basics/Fragment";
import WithParam from "./components/basics/WIthParam";
import First from "./components/basics/First";

const tagJS = <strong>JSX + JS</strong>; // Utilizando JSX numa variável JS

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#15 - Desafio Mega-Sena">
        <Mega />
      </Card>

      <Card titulo="#14 - Contador">
        <Counter initialNum={0}></Counter>
      </Card>

      <Card titulo="#13 - Componente Controlado">
        <Input />
      </Card>

      <Card titulo="#12 - Comunicação Indireta">
        <IndirectParent></IndirectParent>
      </Card>

      <Card titulo="#11 - Comunicação Direta">
        <DirectParent></DirectParent>
      </Card>

      <Card titulo="#10 - Renderização Condicional">
        <EvenOrOdd num={10} />
        <UserInfo usuario={{ nome: "Bê Santos" }} />
        <UserInfo usuario={{ email: "b@gmail.com" }} />
        {/* <UserInfo /> não será renderizado */}
      </Card>

      <Card titulo="#09 - Desafio Repetição">
        <ProductsTable />
      </Card>

      <Card titulo="#08 - Repetição">
        <StudentList />
      </Card>

      <Card titulo="#07 - Componente com Filhos">
        <Family lastName="Santos">
          <FamilyMember name="Bê" />
          <FamilyMember name="Jess" />
          <FamilyMember name="Ema" />
        </Family>
      </Card>

      <Card titulo="#06 - Número Aleatório">
        <Random min={0} max={10} />
      </Card>

      <Card titulo="#05 - Arrow Function no React + App.jsx">
        Sintaxe enxuta de uma função e App geral da aplicação
      </Card>

      <Card titulo="#04 - Fragment">
        <Fragment></Fragment>
      </Card>

      <Card titulo="#03 - Componente com parâmetro">
        <WithParam titulo="Situação do aluno" aluno="Pedro Silva" nota={9.3} />
      </Card>

      <Card titulo="#02 - Primeiro componente">
        <First></First>
      </Card>

      <Card titulo="#01 - JSX puro e JSX + JS" color="#333232">
        <strong>JSX puro</strong>
        <br></br>
        <br></br>
        {tagJS}
      </Card>
    </div>
  </div>
);
