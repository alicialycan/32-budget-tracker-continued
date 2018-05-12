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

  toggleEdit(ev) {
    this.props.categoryUpdate({isEditing: true, id: this.props.id});
  }

  toggleOffEdit(ev) {
    this.props.categoryUpdate({isEditing: false, id: this.props.id});
  }

  handleDelete(ev) {
    ev.preventDefault();
    this.props.categoryDestroy(this.props.id);
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
        <ExpenseForm categoryId={this.props.id} />
      </li> 
    );
  }
}
    
const mapDispatchToProps = dispatch => {
  return {
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDestroy: categoryId => dispatch(categoryDestroy(categoryId))
  };
};

export default connect(null, mapDispatchToProps)(CategoryItem);