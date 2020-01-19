import uuid from "uuid";

export const addExpence = ({
  description = "",
  amount = 0,
  note = "",
  createdAt = 0
}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    amount,
    createdAt,
    note
  }
});

export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const editExpence = ({ id }, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update
});
