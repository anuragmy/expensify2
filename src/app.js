import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from "./store/configureStore.js";
import { addExpence } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import moment from "moment";
import { Provider } from "react-redux";
import ExpensesList from "./components/ExpensesList";

const store = configureStore();

store.dispatch(
  addExpence({
    description: "water bill",
    amount: 100,
    note: "",
    createdAt: moment().format("Do MMMM YYYY hh:mm:ss A")
  })
);

store.dispatch(
  addExpence({
    description: "car bill",
    amount: 1200,
    note: "",
    createdAt: moment().format("Do MMMM YYYY hh:mm:ss A")
  })
);

store.dispatch(setTextFilter("bill"));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
console.log(state);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("app")
);
