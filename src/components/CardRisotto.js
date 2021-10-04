import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SaveCardData } from "../actions/cardActions";
import { useForm } from "../hooks/useForm";
import Checkbox from "./input/checkbox";
import InputNumber from "./input/InputNumber";

const CardRisotto = () => {
  const dispatch = useDispatch()
  const [recetas, setRecetas] = useState([]);
  const [formValue, handleInputChange] = useForm({
    ingredientes:"",
  });

  const {ingredientes} = formValue

  useEffect(() => {
    obtenerRecetas();
  }, []);

  const obtenerRecetas = async () => {
    const url = "https://recipe-rissoto.vercel.app/recipe";
    const res = await fetch(url);
    const data = await res.json();
    setRecetas(data);
  };

  const handleSavePedido = (e) => {
    e.preventDefault();
    console.log(formValue);
    dispatch(SaveCardData(formValue))
  };
  return (
    <>
      <div className="card" style={{ width: "35rem" }}>
        <div className="card-body">
          <form onSubmit={handleSavePedido}>
            {<h5 className="card-title">{recetas?.name}</h5>}
            
            {recetas.ingredients?.map((ingredient) => (
              <ul className="list-group list-group-flush">
                <div className="d-flex">
                  <label htmlFor={ingredient.product} />

                  <Checkbox
                    form={formValue}
                    value={ingredientes}
                    label={ingredient.product}
                    id={ingredient.product}
                    handleChange={handleInputChange}
                    name="ingredientes"
                  />
                  
                  <InputNumber
                    type="number"
                    id={ingredient.product}
                    handleChange={handleInputChange}
                    value={0 || formValue.id}
                    
                  />
                  <li class="list-group-item">
                    {ingredient.product}
                    <br />
                    <span>{ingredient.brand}</span>
                    <br />
                    <span>{ingredient.quantity}</span>
                  </li>
                  <InputNumber
                    type="text"
                    id={ingredient.product}
                    handleChange={handleInputChange}
                    value={ingredient.price}    
                    disabled={true}          
                  />
                  <p>$ { ingredient.price } </p>
                </div>
              </ul>
            ))}
            <button className="btn btn-primary">Go somewhere</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CardRisotto;
