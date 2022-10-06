import React, { useState } from "react";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

/*
useState is a react hook and can be recongnized because it start with the word use
all hooks must be called inside of react component functions
can be called directly indide such component functions.
with useState() we create a special kind of variable , a variable in changes will lead this component fucntion
to called again
with useState we call a function in order to re assign variable 
and useState actually returns an array where the 
useState --> Hook
1) first value is the varibale itslef and 
2) the second element is the updated function 
this variable managed by react somewhere in memoery 
the whole compoennt function will be executed again 
we want to execute this component again when state changes and with the setTitle that is happening
only the compoennt in which state is registered chanegs
It registers the changes for  specific compoennt instance 
Every item in Expenses --> ExpenseItem receives its own seperate State which detached from other states
per component instace 
A specific instance of this component change when value of state changes
state is seperated on a per component instance basis.
we always get a new snapshot of this state when this component function re-executed
initial value in useState is really only considered when this component function is being executed for the first time for a given component instance
1) register state with useState
2) get back two values, value itself and an updated function
state add reactivity to our application

Later in the course, we will see Http requests that complete but you could also updating state because a timer setTimeout expired for example
*/

function ExpenseItem(props){

    const [title, setTitle] = useState(props.title);// special variable is created 

    console.log("tom");
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);

    }


    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;