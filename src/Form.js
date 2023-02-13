import React from "react";
import * as Yup from "yup";
import { useState } from "react";
import styled from "styled-components";

const Sc_legend = styled.legend`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  color: skyblue;
  font-size: 20px;
`;
const Sc_fieldset = styled.fieldset`
  margin-bottom: 10px;
  padding: 70px;
  background-color: #fffafa;
  border-style: solid;
  border-radius: 20px;
  border-color: grey;
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
/* const formSema = Yup.object({
  isim: Yup.string()
    .min(2, "İsim en az 2 karakter olmalıdır")
    .required("Bu alan gereklidir"),
  boyut: Yup.object().shape({
    value: Yup.string().required("Zorunlu Alan"),
    label: Yup.string().required("Required"),
  }),
}); */

export default function Form(props) {
  const { handleSubmitCallBack } = props;
  const [form, setForm] = useState({
    isim: "",
    boyut: "",
    malzeme: [],
    özel: "",
  });
  // error stateleri oluşturmak
  const [formError, setFormError] = useState({
    isim: "",
    boyut: "",
    malzeme: [],
    özel: "",
  });
  /* function hatalariKontrolEt(name, value) {
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
  } */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    return handleSubmitCallBack(form);
  };

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(value);

    const yeniform = {
      ...form,
      [name]: value,
    };
    setForm(yeniform); /* 
    hatalariKontrolEt(name, value);

    setForm({
      ...form,
      [name]: value,
    }); */
  }
  return (
    <div>
      <form onSubmit={handleSubmit} id="pizza-form">
        <Sc_fieldset>
          <Sc_legend>Sipariş Formu</Sc_legend>
          <Sc_label htmlFor="name-input">İsim : </Sc_label>
          <Sc_input
            onChange={handleChange}
            value={form.name}
            id="name-input"
            name="isim"
            type="text"
          />
          {/*  <span style={{ color: "red", fontSize: 12 }}>{formError.isim}</span> */}
          <div>
            <Sc_label
              name="boyut"
              value={form.value}
              onChange={handleChange}
              htmlFor="pizzasize">
              Pizze Boyutu :{" "}
            </Sc_label>
            <Sc_select name="boyut" id="dropdown" onChange={handleChange}>
              <Sc_option value="">Seçiniz</Sc_option>
              <Sc_option>Büyük</Sc_option>
              <Sc_option>Orta</Sc_option>
              <Sc_option>Küçük</Sc_option>
            </Sc_select>
          </div>
          <div>
            <Sc_label>Malzeme Seçimi :</Sc_label>
            <p>
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="jambon"
                name="malzeme"
                value="jambon"
              />
              <Sc_label htmlFor="jambon">Jambon</Sc_label>
            </p>
            <p>
              {" "}
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="sosis"
                name="malzeme"
                value="Sosis"
              />
              <Sc_label htmlFor="sosis"> Sosis </Sc_label>
            </p>
            <p>
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="MozarellaPeyniri"
                name="malzeme"
                value="Mozarella Peyniri"
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
                name="malzeme"
                value="Pizza Sosu"
              />

              <Sc_label htmlFor="PizzaSos"> Pizza Sosu </Sc_label>
            </p>
            <p>
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="SiyahZeytin"
                name="malzeme"
                value="Siyah Zeytin"
              />

              <Sc_label htmlFor="SiyahZeytin"> Siyah Zeytin </Sc_label>
            </p>{" "}
            <p>
              <Sc_input
                onChange={handleChange}
                type="checkbox"
                id="Domates"
                name="malzeme"
                value="Domates"
              />

              <Sc_label htmlFor="Domates"> Domates </Sc_label>
            </p>
          </div>
          <div>
            <Sc_label htmlFor="special-text">
              Özel Seçim :
              <Sc_input
                onChange={handleChange}
                value={form.value}
                type="text"
                name="special"
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
