import {
  EXPENSE_CREATE,
  EXPENSE_UPDATE,
  EXPENSE_DELETE,
} from '../actions/expense-actions.js';

const initialState = {
  expenses: [],
};

const expenseReducer = (state = initialState, action) => {
  let newState = {};
  let expenses = [];

  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
  case EXPENSE_CREATE:
    return Object.assign(newState, state, {
      expenses: [newState.expenses.concat(action.payload)]
    });

  case EXPENSE_UPDATE:
    return Object.assign(newState, state, {
      expenses: [...state.expenses]
    });

  case EXPENSE_DELETE:
    return Object.assign(newState, state, {
      expenses: [...state.expenses]
    });
  default: 
    return state;
  }
};

export default expenseReducer;