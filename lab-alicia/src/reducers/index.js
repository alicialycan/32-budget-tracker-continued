import {combineReducers} from 'redux';
import categoryReducer from './category-app.jsx';
import expenseReducer from './expense-reducer.jsx';

export default combineReducers({
  categories: categoryReducer,
  expenses: expenseReducer
});