export const EXPENSE_CREATE = 'EXPENSE_CREATE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_DELETE = 'EXPENSE_DELETE';

export const expenseCreate = value => {
  return {type: EXPENSE_CREATE, value};
};

export const expenseUpdate = values => {
  return {type: EXPENSE_UPDATE, values};
};

export const expenseDelete = id => {
  return {type: EXPENSE_DELETE, id};
};