import React from 'react';
import ExpenseForm from './expenseForm.jsx';
import { expenseUpdate, expenseDelete } from '../../actions/expense-actions.js';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing});
  }

  handleDelete() {
    this.props.expenseDelete(this.props.id);
  }

  cancel() {
    this.toggleEdit();
  }

  render() {
    if(this.state.isEditing) {
      return (
        <li>
          <button onClick={this.handleDelete}>Delete</button>
          <button onClick={this.handleEditMode}>Edit</button>
          <ExpenseForm action='update' buttonText="Update"
            id={this.props.id} name={this.props.name}
            price={this.props.price} toggleEdit={this.toggleEdit}
            cancel={this.cancel}>
          </ExpenseForm>
        </li>
      );
    } else {
      return (
        <li>
          {this.props.name}
        ${this.props.price}
          <button onClick={this.handleDelete}>Delete</button>
          <button onClick={this.toggleEdit}>Cancel</button>
        </li>
      );
    }
  }
}

export default ExpenseItem;