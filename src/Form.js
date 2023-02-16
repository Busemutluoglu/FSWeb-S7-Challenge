import React from "react";
import * as Yup from "yup";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Sc_fieldset = styled.fieldset`
  /*  padding: 20px; */
  background-color: #fffafa;
  border-style: solid;
  border-radius: 8px;
  margin: 20px 400px 10px;
  border-color: grey;

  span {
    padding: 0 20px;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
`;
const Sc_label = styled.label`
  margin-bottom: 30px;
  padding: 20px;
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
  margin-right: 20px;
  height: 15px;
  border-radius: 8px;
  width: 15px;
`;
const Sc_textarea = styled.textarea`
  width: 500px;
  border: 2px solid gray;
  margin: 20px auto 10px 15px;
  height: 80px;
  border-radius: 8px;
`;
const Sc_input3 = styled.input`
  border-color: grey;
  margin: 40px 0;
  /*  padding: 4px 100px; */
  border-radius: 4px;
  width: 340px;
  height: 25px;
`;

const Sc_select = styled.select`
  border-radius: 3px;
  margin-bottom: 30px;
  padding: 4px 100px 4px 0;
  width: 346px;
  border: 2px solid black;
  background-color: white;
`;

const Sc_malzeme = styled.p`
  padding: 10px;
`;

const Sc_button = styled.button`
  border-radius: 8px;
  border: 2px solid darkgray;
  padding: 20px 20px;
  background-color: black;
  margin-top: 40px auto 20px;
  font-size: 1.2rem;
  margin-left: 350px;

  &:hover {
    background-color: white;
    border-color: black;
  }
  &:hover {
    font-family: fantasy;
    font-size: 1rem;
  }
  text-decoration: none;
  color: antiquewhite;
  margin-right: 2px;
  color: antiquewhite;
  &:hover {
    color: black;
  }
`;

const Sc_div = styled.div`
  display: flex;
  margin: 30px 9px 30px 14px;
  flex-wrap: wrap;
  border: 2px solid black;
  border-radius: 8px;
  max-width: 500px;
  gap: 1.5rem;
`;
const formSema = Yup.object().shape({
  isim: Yup.string()
    .min(2, "*İsim en az 2 karakter olmalıdır")
    .required("*Bu alan gereklidir"),
  boyut: Yup.string().required("*Bu alan zorunludur"),
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
          <Sc_label htmlFor="name-input">İsim Soyisim : </Sc_label>
          <Sc_input3
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
              Pizza Boyutu :{" "}
            </Sc_label>
            <Sc_select onChange={handleChange} name="boyut" id="pizzasize">
              <option>Büyük</option>
              <option>Orta</option>
              <option>Küçük</option>
            </Sc_select>
          </div>
          <span style={{ color: "red", fontSize: 12 }}>{formError.isim}</span>
          <div>
            <p>
              <Sc_label>Malzeme Seçimi :</Sc_label>{" "}
            </p>
            <Sc_div>
              <div className="malzeme">
                <Sc_malzeme>
                  <Sc_input
                    onChange={handleChange}
                    type="checkbox"
                    id="jambon"
                    value="Jambon"
                    name="malzeme1"
                    checked={form.value}
                  />
                  <Sc_label htmlFor="jambon">Jambon</Sc_label>
                </Sc_malzeme>
                <Sc_malzeme>
                  <Sc_input
                    onChange={handleChange}
                    type="checkbox"
                    id="sosis"
                    name="malzeme2"
                    value="Sosis"
                    checked={form.value}
                  />
                  <Sc_label htmlFor="sosis"> Sosis </Sc_label>
                </Sc_malzeme>
                <Sc_malzeme>
                  <Sc_input
                    onChange={handleChange}
                    type="checkbox"
                    id="MozarellaPeyniri"
                    name="malzeme3"
                    value="Mozarella Peyniri"
                    checked={form.value}
                  />

                  <Sc_label htmlFor="MozarellaPeyniri"> Peynir </Sc_label>
                </Sc_malzeme>
              </div>
              <div className="malzeme">
                <Sc_malzeme>
                  <Sc_input
                    onChange={handleChange}
                    type="checkbox"
                    id="PizzaSos"
                    name="malzeme4"
                    value="Pizza Sosu"
                    checked={form.value}
                  />

                  <Sc_label htmlFor="PizzaSos"> Pizza Sosu </Sc_label>
                </Sc_malzeme>
                <Sc_malzeme>
                  <Sc_input
                    onChange={handleChange}
                    type="checkbox"
                    id="SiyahZeytin"
                    name="malzeme5"
                    value="Siyah Zeytin"
                    checked={form.value}
                  />

                  <Sc_label htmlFor="SiyahZeytin"> Siyah Zeytin </Sc_label>
                </Sc_malzeme>{" "}
                <Sc_malzeme>
                  <Sc_input
                    onChange={handleChange}
                    type="checkbox"
                    id="Domates"
                    name="malzeme6"
                    value="Domates"
                    checked={form.value}
                  />

                  <Sc_label htmlFor="Domates"> Domates </Sc_label>
                </Sc_malzeme>
              </div>
            </Sc_div>
          </div>
          <div>
            <Sc_label htmlFor="ozelistek">
              Özel Talep :
              <Sc_textarea
                onChange={handleChange}
                value={form.value}
                name="ozelistek"
                id="special-text"
              />
            </Sc_label>
            <div>
              <Sc_button id="order-button" type="submit">
                Siparişlere Ekle
              </Sc_button>
            </div>
          </div>
        </Sc_fieldset>
      </form>
    </div>
  );
}
