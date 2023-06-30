import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
       <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      <Card className="expenses">
        {props.items.map(expense =>{
          return(
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
          />
          )
        })}
      
      </Card>
    </div>
  );
}

export default Expenses;
