import React from 'react';
import { connect } from 'react-redux';
import {
  expenseCreate,
  expenseUpdate,
} from '../../actions/expense-actions.js';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: new Date(),
      name: '',
      price: 0,
      categoryId: this.props.categoryId,
      isEditing: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({[ev.target.name]: ev.target.value});
  }

  handleSubmit(ev) {
    ev.preventDefault();
    if (this.props.name === 'create') {
      this.props.expenseCreate(this.state);
      this.setState({ name: '', price: 0 });
    }
    if (this.props.name === 'update') {
      let newValue = Object.assign(this.state, {isEditing: false, id: this.props.id
      });
      this.props.expenseUpdate(this.state);
      this.setState({ name: '', price: 0 });
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
        <input type="submit" value={this.props.buttonText} />
      </form>
    );
  }
}

// const mapStateToProps = state => ({
//   expenses: state.expenses
// });

const mapDispatchToProps = (dispatch, getProps) => {
  return {
    expenseCreate: val => dispatch(expenseCreate(val)),
    expenseUpdate: val => dispatch(expenseUpdate(val))
  };
};

export default connect (null, mapDispatchToProps)(ExpenseForm);