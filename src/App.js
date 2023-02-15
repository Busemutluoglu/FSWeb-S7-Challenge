import React, { useState } from "react";
import styled from "styled-components";
import Yemekler from "./Yemekler";
import * as Yup from "yup";

const Sc_h1 = styled.h1`
  font-family: fantasy;
  color: skyblue;
  margin: 50px;
  font-size: 40px;
  margin-right: 50px;
  text-shadow: 3px 5px 4px #4b4bb7;

  &:hover {
    color: white;
  }
`;
const Sc_header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: black;
  opacity: 0.9;

  h3 {
    color: antiquewhite;
  }
  img {
    width: 3.5%;
    height: 3.5%;
    margin: auto 25px;
  }
`;

const App = () => {
  return (
    <>
      <div>
        <Sc_header>
          <img src="./logo192.png" />
          <h3>TY</h3>
          <Sc_h1>Teknolojik Yemekler</Sc_h1>
        </Sc_header>
        <main>
          <Yemekler />
        </main>
      </div>
    </>
  );
};
export default App;
