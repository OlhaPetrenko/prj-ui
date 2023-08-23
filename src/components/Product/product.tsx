import React, { useState } from "react";

import { IProduct } from "../../models";
import { PrjButton } from "../../shared/ui/Button";
import s from "./product.module.scss";

interface ProductProps {
  product: IProduct;
}

function Product({ product }: ProductProps) {
  const [showDescr, setShowDescr] = useState(false);
  return (
    <div className={s.card}>
      <img src={product.image} alt={product.title} className={s.img} />
      <h2 className={s.title}>{product.title}</h2>
      <span className={s.price}>{product.price}</span>
      <PrjButton
        onClick={() => setShowDescr((prevState) => !prevState)}
        isPrimary={false}
      >
        <span>{!showDescr ? "show description" : "hide description"}</span>
      </PrjButton>

      {showDescr && (
        <div>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
}

export default Product;
