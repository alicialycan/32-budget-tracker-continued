import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expenseForm.jsx';
import { expenseUpdate, expenseDelete } from '../../actions/expense-actions.js';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editmode: false,
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.handleDelete(this.props.expense);
  }

  handleEditMode() {
    this.setState({ editmode: !this.state.editmode });
  }

  render() {
    return (
      <div>
        <h4>
          Expense: {this.props.expense.name}</h4>
        <p>Cost: {this.props.expense.cost}</p>
        <button onClick={this.handleDelete}>Delete</button>
        <button onClick={this.handleEditMode}>Edit</button>
        <ExpenseForm>
        expense={this.props.expense}
        onComplete={this.props.expenseItemUpdate}
        </ExpenseForm>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, getState) => ({
  expenseItemUpdate: expense => dispatch(expenseUpdate(expense)),
  expenseItemDelete: expense => dispatch(expenseDelete(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);