import React from "react";
import styled from "styled-components";

const Sc_product_container = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Sc_product_piece_container = styled.div`
  display: flex;
  height: 200px;
  margin-bottom: 20px;
  border: 2px solid black;
  width: 450px;
  border-radius: 9px;
  background-color: #fffafa;
  overflow: hidden;
  margin-left: 9px;
  margin-right: 9px;

  img {
    width: 100%;
    overflow: hidden;
    object-fit: cover;
    height: 200px;
  }
`;
const Sc_product_info = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-left: 10px;

  * {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
`;
const Sc_prize_info = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 10px;

  p {
    vertical-align: middle;
    padding-top: 20px;
    align-self: center;
  }
`;
const Sc_button = styled.button`
  align-self: flex-end;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #fffafa;
  font-size: 1rem;
  width: 130px;
  height: 40px;

  &:hover {
    background-color: black;
    font-size: 1.2rem;
    color: #fffafa;
    border: 1px solid #fffafa;
  }
`;
export default function YanUrunler() {
  return (
    <Sc_product_container className="product-container">
      <Sc_product_piece_container className="product-piece-container">
        <img src="https://www.littlecaesars.com.tr/CMSFiles/Product/LittleImage/citir-tost-pizza.jpg" />
        <Sc_product_info className="product-info">
          <div>
            <h2>Sezar Tost</h2>
            <h6>
              Özel Sezar Sos, Mozzarella Peyniri, Cheddar Peyniri, Dilim Sucuk,
              Domates, Siyah Zeytin
            </h6>
          </div>
          <Sc_prize_info>
            <p>160.90 TL</p>
            <Sc_button>Sipariş Ver</Sc_button>
          </Sc_prize_info>
        </Sc_product_info>
      </Sc_product_piece_container>
      <Sc_product_piece_container className="product-piece-container">
        <img src="https://www.littlecaesars.com.tr/CMSFiles/Product/LittleImage/citir-tavuk-toplari-8li.jpg" />
        <Sc_product_info className="product-info">
          <div>
            <h2>Tavuk Topları</h2>
            <h6>
              Özel Sezar Sos, Mozzarella Peyniri, Cheddar Peyniri, Dilim Sucuk,
              Domates, Siyah Zeytin
            </h6>
          </div>
          <Sc_prize_info>
            <p>200.90 TL</p>
            <Sc_button>Sipariş Ver</Sc_button>
          </Sc_prize_info>
        </Sc_product_info>
      </Sc_product_piece_container>
      <Sc_product_piece_container className="product-piece-container">
        <img src="https://www.littlecaesars.com.tr/CMSFiles/Product/LittleImage/sezar-patates.jpg" />
        <Sc_product_info className="product-info">
          <div>
            <h2>Sezar Patates</h2>
            <h6>
              Özel Sezar Sos, Mozzarella Peyniri, Cheddar Peyniri, Dilim Sucuk,
              Domates, Siyah Zeytin
            </h6>
          </div>
          <Sc_prize_info>
            <p>60.90 TL</p>
            <Sc_button>Sipariş Ver</Sc_button>
          </Sc_prize_info>
        </Sc_product_info>
      </Sc_product_piece_container>
      <Sc_product_piece_container className="product-piece-container">
        <img src="https://www.littlecaesars.com.tr/CMSFiles/Product/LittleImage/sezar-puff-sebzeli.jpg" />
        <Sc_product_info className="product-info">
          <div>
            <h2>Sezar Puf</h2>
            <h6>
              Özel Sezar Sos, Mozzarella Peyniri, Cheddar Peyniri, Dilim Sucuk,
              Domates, Siyah Zeytin
            </h6>
          </div>
          <Sc_prize_info>
            <p>99.90 TL</p>
            <Sc_button>Sipariş Ver</Sc_button>
          </Sc_prize_info>
        </Sc_product_info>
      </Sc_product_piece_container>
      <Sc_product_piece_container className="product-piece-container">
        <img src="https://www.littlecaesars.com.tr/CMSFiles/Product/LittleImage/sezar-et-doner-2urun-indirimli.jpg" />
        <Sc_product_info className="product-info">
          <div>
            <h2>Sezar Et Döner</h2>
            <h6>
              Özel Sezar Sos, Mozzarella Peyniri, Cheddar Peyniri, Dilim Sucuk,
              Domates, Siyah Zeytin
            </h6>
          </div>
          <Sc_prize_info>
            <p>160.90 TL</p>
            <Sc_button>Sipariş Ver</Sc_button>
          </Sc_prize_info>
        </Sc_product_info>
      </Sc_product_piece_container>
      <Sc_product_piece_container className="product-piece-container">
        <img src="https://www.littlecaesars.com.tr/CMSFiles/Product/LittleImage/sufle.jpg" />
        <Sc_product_info className="product-info">
          <div>
            <h2>Sezar Sufle</h2>
            <h6>
              Özel Sezar Sos, Mozzarella Peyniri, Cheddar Peyniri, Dilim Sucuk,
              Domates, Siyah Zeytin
            </h6>
          </div>
          <Sc_prize_info>
            <p>99.90 TL</p>
            <Sc_button>Sipariş Ver</Sc_button>
          </Sc_prize_info>
        </Sc_product_info>
      </Sc_product_piece_container>
    </Sc_product_container>
  );
}
