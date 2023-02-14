import React from "react";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Sc_legend = styled.legend`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  color: skyblue;
  font-size: 20px;
  text-align: center;
`;
const Sc_fieldset = styled.fieldset`
  margin-bottom: 10px;
  padding: 70px;
  background-color: #fffafa;
  border-style: solid;
  border-radius: 20px;
  border-color: grey;
  margin: auto 35%;
`;
const Sc_label = styled.label`
  margin-bottom: 10px;
  color: black;
  &:hover {
    color: skyblue;
  }
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bolder;
`;
const Sc_input = styled.input`
  border-color: grey;
  margin-bottom: 10px;
  height: 17px;
  border-radius: 7px;
`;
const Sc_option = styled.option`
  height: 20px;
  border-radius: 7px;
  padding: 10px;
  border-color: grey;
  margin-bottom: 10px;
`;
const Sc_select = styled.select`
  border-radius: 7px;
  margin-bottom: 10px;
  padding: 4px;
  width: 90px;
  border: 3px;
`;
const formSema = Yup.object().shape({
  isim: Yup.string()
    .min(2, "İsim en az 2 karakter olmalıdır")
    .required("Bu alan gereklidir"),
  boyut: Yup.string().required("Bu alan zorunludur"),
  malzeme1: Yup.bool(),
  malzeme2: Yup.bool(),
  malzeme3: Yup.bool(),
  malzeme4: Yup.bool(),
  malzeme5: Yup.bool(),
  malzeme6: Yup.bool(),
  ozelistek: Yup.string(),
});

export default function Form(props) {
  const { handleSubmitCallBack } = props;
  const [form, setForm] = useState({
    isim: "",
    boyut: "",
    malzeme1: false,
    malzeme2: false,
    malzeme3: false,
    malzeme4: false,
    malzeme5: false,
    malzeme6: false,
    özel: "",
  });
  // error stateleri oluşturmak
  const [formError, setFormError] = useState({
    isim: "",
    boyut: "",
    malzeme1: false,
    malzeme2: false,
    malzeme3: false,
    malzeme4: false,
    malzeme5: false,
    malzeme6: false,
    özel: "",
  });

  function hatalariKontrolEt(name, value) {
    Yup.reach(formSema, name)
      .validate(value)
      .then(() => {
        setFormError({
          ...formError,
          [name]: "",
        });
      })
      .catch((error) => {
        setFormError({
          ...formError,
          [name]: error.errors[0],
        });
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    axios
      .post("https://reqres.in/api/users", form)
      .then((res) => {
        setForm(res.form); // get just the form data from the REST api
        console.log("success", res);
      })
      .catch((err) => console.log(err.response));

    return handleSubmitCallBack(form);
  };

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    console.log(value);

    const yeniform = {
      ...form,
      [name]: type === "checkbox" ? checked : value,
    };

    //dynamic object key
    setForm(yeniform);
    hatalariKontrolEt(name, value);

    setForm({
      ...form,
      [name]: value,
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit} id="pizza-form">
        <Sc_fieldset>
          <Sc_legend>Formu Doldurunuz</Sc_legend>
          <Sc_label htmlFor="name-input">* İsim Soyisim: </Sc_label>
          <Sc_input
            onChange={handleChange}
            value={form.name}
            id="name-input"
            cy="input"
            name="isim"
            type="text"
          />
          <span style={{ color: "red", fontSize: 12 }}>{formError.isim}</span>
          <div>
            <Sc_label
              name="boyut"
              value={form.value}
              onChange={handleChange}
              htmlFor="pizzasize">
              * Pizza Boyutu :{" "}
            </Sc_label>
            <Sc_select onChange={handleChange} name="boyut" id="dropdown">
              <Sc_option>Büyük</Sc_option>
              <Sc_option>Orta</Sc_option>
              <Sc_option>Küçük</Sc_option>
            </Sc_select>
          </div>
          <span style={{ color: "red", fontSize: 12 }}>{formError.isim}</span>
          <div>
            <Sc_label>Malzeme Seçimi :</Sc_label>
            <p>
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="jambon"
                value="Jambon"
                name="malzeme1"
                checked={form.value}
              />
              <Sc_label htmlFor="jambon">Jambon</Sc_label>
            </p>
            <p>
              {" "}
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="sosis"
                name="malzeme2"
                value="Sosis"
                checked={form.value}
              />
              <Sc_label htmlFor="sosis"> Sosis </Sc_label>
            </p>
            <p>
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="MozarellaPeyniri"
                name="malzeme3"
                value="Mozarella Peyniri"
                checked={form.value}
              />

              <Sc_label htmlFor="MozarellaPeyniri">
                {" "}
                Mozarella Peyniri{" "}
              </Sc_label>
            </p>
            <p>
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="PizzaSos"
                name="malzeme4"
                value="Pizza Sosu"
                checked={form.value}
              />

              <Sc_label htmlFor="PizzaSos"> Pizza Sosu </Sc_label>
            </p>
            <p>
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="SiyahZeytin"
                name="malzeme5"
                value="Siyah Zeytin"
                checked={form.value}
              />

              <Sc_label htmlFor="SiyahZeytin"> Siyah Zeytin </Sc_label>
            </p>{" "}
            <p>
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="Domates"
                name="malzeme6"
                value="Domates"
                checked={form.value}
              />

              <Sc_label htmlFor="Domates"> Domates </Sc_label>
            </p>
          </div>
          <div>
            <Sc_label htmlFor="ozelistek">
              Özel Seçim :
              <Sc_input
                onChange={handleChange}
                value={form.value}
                type="text"
                name="ozelistek"
                id="special-text"
              />
            </Sc_label>
            <div>
              <button id="order-button" type="submit">
                Siparişlere Ekle
              </button>
            </div>
          </div>
        </Sc_fieldset>
      </form>
    </div>
  );
}
