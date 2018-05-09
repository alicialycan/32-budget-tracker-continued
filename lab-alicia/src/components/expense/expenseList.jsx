import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from './expenseItem.jsx';

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
        isEditing={expense.isEditing}>
      </ExpenseItem>;
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

const mapStateToProps = state => ({
  expenses: state.expenses
});

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseCreate: val => dispatch(expenseCreate(val)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(ExpenseList);