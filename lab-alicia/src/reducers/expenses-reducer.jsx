import {
  EXPENSE_CREATE,
  EXPENSE_UPDATE,
  EXPENSE_DELETE,
} from '.../actions/expenses-actions.jsx';
import uuidv4 from 'uuid/v4';

const initialState = {
  expenses: [],
};

export default function expenseReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  switch (action.type) {
  case EXPENSE_CREATE:
    return Object.assign(newState, state, {
      expenses: [...state.expenses, new Date()]
    });
  case EXPENSE_UPDATE:
    return Object.assign(newState, state, {
      expenses: [...state.expenses]
    });
  case EXPENSE_DELETE:
    return Object.assign(newState, state, {
      expenses: [...state.expenses]
    });
  default: return state;
  }
}