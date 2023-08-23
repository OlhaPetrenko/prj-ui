import React, { useState } from "react";
import { PrjButton } from "../../shared/ui/Button/";

import s from "./CreateProductForm.module.scss";

interface CreateProductFormProp {
  onCreate: () => void;
  qwe: number | string;
}

function CreateProductForm({ onCreate, qwe }: CreateProductFormProp) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onCreate();
  };

  const handlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        type="text"
        className={s.input}
        placeholder="Enter product title ..."
        onChange={handlChange}
      />
      <PrjButton content={"Create prod"} fullWidth={true} />
    </form>
  );
}

export default CreateProductForm;
