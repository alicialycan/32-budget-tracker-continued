import React from 'react';
import {connect} from 'redux-react';
import ExpenseItem from './expenseItem.jsx';
import {
  expenseCreate
 } from '../actions/expense-actions.jsx';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);

    this.displayAllExpenses = this.displayAllExpenses.bind(this);
  }

  displayAllExpenses() {
    return this.props.expenses.map(expense => {
      return <expenseItem
        key={expense.id}
        id={expense.id}
        categoryId={expense.id}
        timestamp={}
        name={expense.name}
        price={expense.price}
        isEditing={expense.isEditing}>
      </expenseItem>
    })
  }
}