import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Form from "./Form";
import logo from "./Pizza.png";

const Sc_nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin-top: 22px;

  a {
    border-radius: 10px;
    border: 0px solid;
    padding: 8px 15px;
    background-color: silver;
    &:hover {
      background-color: skyblue;
    }
    &:hover {
      font-family: fantasy;
    }
    text-decoration: none;
    color: antiquewhite;
    margin-right: 2px;
    color: antiquewhite;
    &:hover {
      color: black;
    }
  }
`;
const Sc_h2 = styled.h2`
  color: skyblue;
  padding: 8px;
  border-radius: 10px;
  background-color: #fffafa;
  text-align: center;
`;

export default function Yemekler() {
  const [siparis, setSiparis] = useState([
    {
      isim: "",
      boyut: "",
      malzeme: [],
      özel: "",
    },
  ]);

  function siparisEkle(eklenenSiparis) {
    const yenisiparis = [...siparis, eklenenSiparis];
    setSiparis(yenisiparis);
  }
  console.log(siparis);
  return (
    <div>
      <Sc_nav id="order-pizza">
        <p>
          <Link to="/">AnaSayfa</Link>
        </p>
        <p>
          <Link to="/SiparisFormu">Sipariş Formu</Link>
        </p>

        <p>
          <Link to="/Hakkinda">Hakkında</Link>
        </p>
      </Sc_nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/SiparisFormu">
          <SiparisFormu />
        </Route>
        <Route path="/Hakkinda">
          <Hakkinda />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );

  function Home() {
    return (
      <div>
        <Sc_h2>AnaSayfa</Sc_h2>
        <main>
          <img src={logo} />
        </main>
      </div>
    );
  }

  function SiparisFormu() {
    return (
      <div>
        <Sc_h2>Sipariş Formu</Sc_h2>
        <div>
          <Form handleSubmitCallBack={siparisEkle} />
        </div>
      </div>
    );
  }

  function Hakkinda() {
    return <Sc_h2>Hakkinda</Sc_h2>;
  }
}
