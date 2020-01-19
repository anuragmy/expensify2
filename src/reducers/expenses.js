const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(s => s.id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense =>
        expense.id === action.id
          ? { ...expense, ...action.update }
          : { ...expense }
      );
    default:
      return state;
  }
};
