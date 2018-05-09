import {
  EXPENSE_CREATE,
  EXPENSE_UPDATE,
  EXPENSE_DELETE,
} from '../actions/expense-actions.jsx';
import uuidv4 from 'uuid/v4';

const initialState = {
  expenses: [],
};

const expenseReducer = (state = initialState, action) => {
  let newState = {};
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
  case EXPENSE_CREATE:
    console.log('action', action);
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
  default: return state;
  }
};

export default expenseReducer;