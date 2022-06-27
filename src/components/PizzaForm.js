import React from "react";

function PizzaForm({pizza, onEditFormSubmit , onFormChange}) {

  function handleFormChange(e){
      const name = e.target.name;
      const value = e.target.value;
      onFormChange(name, value);
  }

  function handleRadioChange(e){
    const name = e.target.name;
    const value = e.target.value;
    onFormChange(name, value === "Vegetarian");
  }

  function handleFormSubmit(e){
    e.preventDefault();
    fetch(`http://localhost:3001/pizzas/${pizza.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pizza)
    })
    .then(r => r.json())
    .then(pizza => {
      onEditFormSubmit(pizza);
    })
    .catch(error => console.log(error))
  }

  if (!pizza) return null;

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value= {pizza.topping}
            onChange={handleFormChange}
          />
        </div>
        <div className="col">
          <select 
          className="form-control" 
          name="size" 
          value={pizza.size}
          onChange={handleFormChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={pizza.vegetarian}
              value="Vegetarian"
              onChange={handleRadioChange}>
            </input>
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={!pizza.vegetarian}
              value="Not Vegetarian"
              onChange={handleRadioChange}></input>
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
