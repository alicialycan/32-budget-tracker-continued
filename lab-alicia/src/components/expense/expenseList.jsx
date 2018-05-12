import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from './expenseItem.jsx';
import { expenseUpdate, expenseDelete } from '../../actions/expense-actions.js';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);

    this.displayAllExpenses = this.displayAllExpenses.bind(this);
  }

  displayAllExpenses() {
    return this.props.expenses.map(expense => {
      return <ExpenseItem
        key={expense.id}
        id={expense.id}
        name={expense.name}
        price={expense.price}
        isEditing={expense.isEditing} />;
    });
  }

  render() {
    return (
      <div>
        <h2>Current Expenses List:</h2>
        <ul>{this.displayAllExpenses}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { expenses: state.expenses };
};

const mapDispatchToProps = (dispatch) => {
  return {
    expenseUpdate: val => dispatch(expenseUpdate(val)),
    expenseDelete: val => dispatch(expenseDelete(val)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(ExpenseList);