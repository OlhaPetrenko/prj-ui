import React, { useEffect, useState } from "react";
import axios from "axios";

import Hello from "../hello/hello";
import Product from "../Product/product";
import Logo from "../../img/logo_bg.svg";
// import { products } from "../../data/products";
import { IProduct } from "../../models";
import Modal from "../Modal/modal";
import CreateProductForm from "../CreateProductForm/CreateProductForm";

export default function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  const onBackdropClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setModalIsOpen(false);
    }
  };

  return (
    <div>
      {loading && (
        <p style={{ textAlign: "center", fontSize: "60px" }}>Loading....</p>
      )}

      {error && (
        <p style={{ textAlign: "center", fontSize: "60px", color: "red" }}>
          {error}
        </p>
      )}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <button
        type="button"
        onClick={() => setModalIsOpen(true)}
        style={{
          display: "block",
          width: "80%",
          padding: "20px",
          background: "yellow",
          borderRadius: "10px",
          margin: "0 auto",
          fontSize: "18px",
          textTransform: "uppercase",
          fontWeight: "700",
        }}
      >
        Create product
      </button>

      {modalIsOpen && (
        <Modal title="Create product" onClose={onBackdropClose}>
          <CreateProductForm
            qwe={122}
            onCreate={() => {
              setModalIsOpen(false);
            }}
          />
        </Modal>
      )}
      <Hello
        name="mango"
        src="https://klike.net/uploads/posts/2019-01/1547365376_1.jpg"
      />
      <Hello
        name="siri"
        src="https://klike.net/uploads/posts/2021-06/1623669235_2.jpg"
      />

      <Logo />
    </div>
  );
}
