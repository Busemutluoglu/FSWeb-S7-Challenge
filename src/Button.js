import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

const Sc_nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  font-size: 30px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  a {
    border-radius: 6px;
    border: 2px solid whitesmoke;
    padding: 8px 15px;
    background-color: silver;
    &:hover {
      background-color: black;
      border: 2px solid wheat;
    }
    &:hover {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      font-weight: 0;
      font-size: 2rem;
      padding: 10px;
    }
    text-decoration: none;
    color: whitesmoke;

    margin-right: 2px;

    &:hover {
      color: wheat;
    }
  }
`;

export default function Button() {
  return (
    <div>
      <div>
        <Sc_nav>
          <Link to="/Hakkinda">Çeşitleri Gör</Link>

          <Link to="/SiparisFormu">Spariş Ver</Link>
        </Sc_nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Hakkinda">
            <Hakkinda />
          </Route>
          <Route path="/SiparisFormu">
            <SiparisFormu />
          </Route>
        </Switch>
      </div>
    </div>
  );

  function Hakkinda() {
    return <h2></h2>;
  }

  function SiparisFormu() {
    return <h2></h2>;
  }
}
