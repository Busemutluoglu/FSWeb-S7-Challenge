import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Form from "./Form";
import logo from "./hede.jpg";
import axios from "axios";
import YanUrunler from "./YanUrunler";
import Button from "./Button";

const Sc_nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin-top: 22px;

  a {
    border-radius: 6px;
    border: 2px solid darkgray;
    padding: 8px 15px;
    background-color: silver;
    &:hover {
      background-color: skyblue;
      border: 2px solid black;
    }
    &:hover {
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      font-weight: bolder;
      font-size: 1.1rem;
      padding: 12px 15px;
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
  margin-top: auto;
  padding: 10px;
  border-radius: 10px;
  background-color: #fffafa;
  text-align: center;
  &:hover {
    color: black;
  }
`;

const Sc_div = styled.div`
  background-image: url(${logo});
  height: 90vh;
  align-items: center;
  display: flex;
  justify-content: center;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export default function Yemekler() {
  const [siparis, setSiparis] = useState([
    {
      isim: "",
      boyut: "",
      malzeme1: false,
      malzeme2: false,
      malzeme3: false,
      malzeme4: false,
      malzeme5: false,
      malzeme6: false,
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
          <Link to="/Hakkinda">Yan Ürünler</Link>
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
        <Sc_div>
          <div>
            <Button />
          </div>
        </Sc_div>
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
    return (
      <div>
        <Sc_h2>Yan Ürünler</Sc_h2>
        <div>
          <YanUrunler />
        </div>
      </div>
    );
  }
}
