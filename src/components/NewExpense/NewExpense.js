import React , {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const [clicked, setClicked] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const clickedHandler = () =>{
    setClicked(true)
  }

  const cancleButtonHandler =() =>{
    setClicked(false)
  }

  return (
    <div className="new-expense">
      {!clicked && <button onClick={clickedHandler}>Add New Expense</button>}
      {clicked && <ExpenseForm onCancle={cancleButtonHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
}
