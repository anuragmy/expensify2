import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//demo state
const demostate = {
  expenses: [
    {
      id: "sasasa",
      amount: 344,
      createdAt: 0,
      description: "house rent",
      note: "house rtent not paid"
    }
  ],
  filter: {
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
    text: "rent"
  }
};

//expenses Reducers

console.log(store.getState());

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
  console.log(state);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpence({
    description: "coffee",
    amount: 100,
    note: "this is about home rent",
    createdAt: -1000
  })
);

const expenseTwo = store.dispatch(
  addExpence({
    description: "bike ",
    amount: 1000,
    note: "this is about bike rent",
    createdAt: -22000
  })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpence({ id: expenseTwo.expense.id }, { amount: 500 }));
// store.dispatch(setTextFilter({ text: "bike rent" }));
// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());
store.dispatch(setStartDate(12));
store.dispatch(setEndDate(14));
//store.dispatch(setStartDate(200));
//store.dispatch(setTextFilter("rent"));

const user = {
  name: "a",
  age: 3
};

console.log({
  ...user
});

// import * as actionTypes from "./actions/types.js";

// const increments = ({ incrementBy = 5 } = {}) => ({
//   type: actionTypes.INCREMENT,
//   incrementBy
//   //incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
// });

// const reset = ({ resetCount = 0 } = {}) => ({
//   type: actionTypes.RESET,
//   resetCount
// });

// const decrements = ({ decrementBy = 1 } = {}) => ({
//   type: actionTypes.DECREMENT,
//   decrementBy
//   //incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
// });

// const store = createStore((state = { count: 0 }, action) => {
//   console.log("running");
//   switch (action.type) {
//     case actionTypes.INCREMENT:
//       return {
//         count: state.count + action.incrementBy
//       };

//     case actionTypes.DECREMENT:
//       return {
//         count: state.count - action.decrementBy
//       };
//     case actionTypes.RESET:
//       return {
//         count: (state.count = action.resetCount)
//       };
//     default:
//       return state;
//   }
// });

// //console.log(store.getState());

// // store.dispatch({
// //   type: actionTypes.INCREMENT,
// //   incrementBy: 4
// // });

// store.subscribe(() => {
//   console.log("state change", store.getState());
// });

// store.dispatch(increments());
// store.dispatch(decrements({ decrementBy: "" }));
// store.dispatch(reset());

// //store.dispatch(decrements());
// //unsubscribe();

// const book = {
//   name: {
//     //  first: "anurag",
//     last: "chhabra"
//   }
// };

// const { first = "defaultname" } = book.name;
// const a = ["one", "two", "three"];
// const [, t, , f = "four"] = a;
// console.log(first);
// console.log(t, f);
