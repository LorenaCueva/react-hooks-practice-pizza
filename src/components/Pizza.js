import React from "react";

function Pizza({pizza, onPizzaEdit}) {

  const {topping, size, vegetarian} = pizza;

  function handlePizzaEdit(){
    onPizzaEdit(pizza);
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Vegetarian" : "Not Vegetarian"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handlePizzaEdit}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
