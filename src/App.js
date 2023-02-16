import React from "react";
import styled from "styled-components";
import Yemekler from "./Yemekler";
import pic from "./pizza/black.jpeg";

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
  background-image: url(${pic});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;

  h3 {
    color: antiquewhite;
    text-shadow: 3px 1px 0px #95d3ed;
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
      </div>
      <main>
        <Yemekler />
      </main>
    </>
  );
};
export default App;
