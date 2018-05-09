import {combineReducers} from 'redux';
import categoryAppReducer from './category-app.jsx';
import expensesReducer from './expenses-reducer.jsx';

export default combineReducers ({
  category: categoryAppReducer,
  expenses: expensesReducer
});