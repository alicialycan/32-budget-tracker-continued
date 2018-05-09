import React from 'react';
import { connect } from 'react-redux';
import {
  expenseCreate,
  expenseUpdate,
} from '.../actions/expenses-actions.jsx';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cost: '',
      categoryId: this.props.categoryId,
    };

    this.handleChange = handleChange.bind(this);
    this.handleSubmit = handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({[ev.target.name]: ev.target.value});
  }

  handleSubmit(ev) {
    ev.preventDefault();
    if (this.props.name === 'create') {
      this.props.expenseCreate(this.state);
    }
    if (this.props.name === 'update') {
      let newValue = Object.assign(this.state, {isEditing: false, id: this.props.id
      });
      this.props.expenseUpdate(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}
          name="name"
          type="text"
          placeholder="name"
          value={this.state.name}
        />
        <input onChange={this.handleChange}
          name="price"
          type="text"
          placeholder="price"
          value={this.state.price}
        />
        <button
          type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses
});

const mapDispatchToProps = (dispatch, getProps) => {
  return {
    expenseCreate: val => dispatch(expenseCreate(val)),
    expenseUpdate: val => dispatch(expenseUpdate(val))
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(ExpenseForm);