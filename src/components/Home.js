import React from "react";
import ExpensesList from "./ExpensesList";

const Home = props => {
  console.log(props);
  return (
    <div>
      <ExpensesList />
    </div>
  );
};

export default Home;
