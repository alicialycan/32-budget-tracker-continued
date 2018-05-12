import uuidv4 from 'uuid/v4';

export const EXPENSE_CREATE = 'EXPENSE_CREATE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_DELETE = 'EXPENSE_DELETE';

export const expenseCreate = expense => {
  expense.id = uuidv4();
  return {type: EXPENSE_CREATE, payload: expense};
};

export const expenseUpdate = expense => {
  return {type: EXPENSE_UPDATE, payload: expense};
};

export const expenseDelete = expense => {
  return {type: EXPENSE_DELETE, payload: expense};
};