import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem.js";

const ExpensesList = props => {
  return (
    <div>
      <h1>Expenses List</h1>
      {props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  expenses: state.expenses,
  filters: state.filter
});

export default connect(mapStateToProps)(ExpensesList);
