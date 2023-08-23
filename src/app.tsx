import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container } from "semantic-ui-react";

import Hello from "./components/hello/hello";
import Product from "./components/Product/product";
import Logo from "./img/logo_bg.svg";
import { IProduct } from "./models";

import CreateProductForm from "./components/CreateProductForm/CreateProductForm";

import { PrjBreadcrumb } from "./shared/ui/Breadcrumb";
import { PrjButton } from "./shared/ui/Button";
import { Divider } from "./shared/ui/Divider";
import { PrjPopup } from "./shared/ui/Popup";
import { PrjInput } from "./shared/ui/Input";
import { PrjLabel } from "./shared/ui/Label";
import { PrjIcon } from "./shared/ui/Icon";
import { PrjLoader } from "./shared/ui/Loader";
import { PrjCheckbox } from "./shared/ui/Checkbox";
import { Backdrop } from "./shared/ui/Backdrop";

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

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div>
      <PrjBreadcrumb />
      <Logo />

      <Container style={{ padding: "50px 0", textAlign: "center" }}>
        <PrjButton
          content={"Primary button"}
          onClick={openModal}
          size={"big"}
          className={"btn"}
        />
        <PrjPopup
          content={
            "A small window that is displayed on top of the existing windows on screen."
          }
        />
        <Divider isHorizontal={false} />
        <PrjButton
          content={"Secondary button"}
          size={"big"}
          isPrimary={false}
        />
        <PrjPopup
          content={
            " A popup window can be used in any application to display new information; however, the term often refers to an advertisement (see popup ad)."
          }
          size={"large"}
          wide={true}
          position={"bottom center"}
        />
        <Divider isHorizontal={false} />
        <PrjButton content={"Disabled button"} size={"big"} disabled={true} />
      </Container>

      <Divider />

      <Container style={{ padding: "50px 0", textAlign: "center" }}>
        <PrjInput
          icon={"envelope outline"}
          iconPosition={"left"}
          placeholder={"mymail@mail.com"}
          size={"big"}
        />
        <Divider />
        <PrjInput placeholder={"mysite.com"} label={"http://"} fluid={true} />
      </Container>
      <Divider />

      <Container style={{ padding: "20px 0", textAlign: "center" }}>
        <PrjIcon name={"users"} size={"medium"} />
        <Divider isHorizontal={false} />
        <PrjLabel size={"massive"} />
        <Divider isHorizontal={false} />
        <PrjLabel size={"massive"}>
          <PrjIcon name={"mail"} size={"massive"} />
        </PrjLabel>
        <Divider />
        <PrjLoader active={true} size="huge" />
        <PrjCheckbox label={"Make my profile visible"} />
      </Container>

      <div style={{ padding: "50px 0" }}>
        {loading && <PrjLoader active={true} size="huge" />}

        {error && (
          <p style={{ textAlign: "center", fontSize: "60px", color: "red" }}>
            {error}
          </p>
        )}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

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
        <Backdrop title="Create product" onClose={onBackdropClose}>
          <CreateProductForm
            onCreate={() => {
              setModalIsOpen(false);
            }}
          />
        </Backdrop>
      )}
      <Hello
        name="mango"
        src="https://klike.net/uploads/posts/2019-01/1547365376_1.jpg"
      />
      <Hello
        name="siri"
        src="https://klike.net/uploads/posts/2021-06/1623669235_2.jpg"
      />
    </div>
  );
}
