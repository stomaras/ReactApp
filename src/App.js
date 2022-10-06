import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React from "react";


const App = () => {
  const expenses = [
    { 
      id: 'e1',
      title:'Toilte paper',
      amount: 94.12, 
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e2', 
      title:'New TV', 
      amount:294.67, 
      date: new Date(2020, 2, 28)
    },
    { 
      id: 'e3',
      title:'Car Insurance', 
      amount:300.67, 
      date: new Date(2022, 2, 28)
    },
  ];


  const addExpenseHandler = expense => {
    console.log("In app js");
    console.log(expenses);
  }
  // return React.createElement('div',{}, React.createElement('h2',{},)))
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

// jsx is js inside html.
// this here is our target state
// one file per component
// create comp , export it and then import in the right place
// props can only be passed from parent to child, we can skip intermediate components 
// Lifting state up 
// <App/>state ---> Lifting our state up ---> pass state data via props
// <NewExpense/> ---> Data/State is generated here
// <Expenses/> ---> Data/State is needed here
// we do not have direct connection between two sibling components 
