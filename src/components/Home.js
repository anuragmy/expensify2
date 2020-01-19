import React from "react";
import ExpensesList from "./ExpensesList";
import ExpenseListFilter from "./ExpenseListFilter.js";

const Home = props => {
  console.log(props);
  return (
    <div>
      <ExpenseListFilter />
      <ExpensesList />
    </div>
  );
};

export default Home;
