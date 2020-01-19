import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem.js";
import selectExpenses from "../selectors/expenses.js";

const ExpensesList = props => {
  return (
    <div>
      <h1>Expenses List</h1>
      {console.log(props)}
      {props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filter),
  filters: state.filter
});

export default connect(mapStateToProps)(ExpensesList);
