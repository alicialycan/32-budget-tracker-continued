import React from 'react';
import {connect} from 'react-redux';
import {
  categoryUpdate,
  categoryDestroy,
} from '../../actions/category-actions.js';

import CategoryForm from './categoryForm.jsx';
import ExpenseForm from '../expense/expenseForm.jsx';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this),
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleOffEdit = this.toggleOffEdit.bind(this);
  }

  toggleEdit(ev, id) {
    this.props.categoryUpdate({isEditing: true, id});
  }

  toggleOffEdit(ev, id) {
    this.props.categoryUpdate({isEditing: false, id});
  }

  handleDelete(ev, id) {
    ev.preventDefault();
    this.props.categoryDestroy(id);
  }

  render() {
    if(this.props.isEditing === true) {
      return (
        <div>
          <CategoryForm name="update" 
            id={this.props.id}>
          </CategoryForm>
          <button 
            onClick={this.toggleOffEdit}
            id={this.props.id}>
            Cancel
          </button>
        </div>
      );
    }
    return (
      <li> 
        {this.props.name}: ${this.props.budget} 
        <button 
          id={this.props.id} 
          onClick={this.handleDelete}>
          Delete
        </button>
        <button 
          id={this.props.id} 
          onClick={this.toggleEdit}>
          Edit
        </button>
        <ExpenseForm />
      </li> 
    );
  }
}
    
const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: (values) => dispatch(categoryUpdate(values)),
    categoryDestroy: id => dispatch(categoryDestroy(id))
  };
};

export default connect(null, mapDispatchToProps)(CategoryItem);