import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzas, setPizzas] = useState([]);
  const [pizzaForForm, setPizzaForForm] = useState(null);

  useEffect(() => { 
    fetch("http://localhost:3001/pizzas")
    .then(r => r.json())
    .then(pies => setPizzas(pies))
  },[])

  function handlePizzaEdit(pizza){
    setPizzaForForm(pizza);
  }

  function handleEditFormSubmit(pizza){
    const updatedPizzas = pizzas.map(pie => pie.id === pizza.id ? pizza : pie);
    setPizzas(updatedPizzas);
    setPizzaForForm(null);
  }

  function handleFormChange(name, value){
    setPizzaForForm({...pizzaForForm, [name]:value})
  }

  return (
    <>
      <Header />
      <PizzaForm pizza={pizzaForForm} onEditFormSubmit={handleEditFormSubmit} onFormChange={handleFormChange}/>
      <PizzaList pizzas={pizzas} onPizzaEdit={handlePizzaEdit}/>
    </>
  );
}

export default App;
