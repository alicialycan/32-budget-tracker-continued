import {
  CATEGORY_CREATE,
  CATEGORY_UPDATE,
  CATEGORY_DESTROY,
} from '../actions/category-actions.js';

const initialState = {
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  let categories;

  switch (action.type) {
  case CATEGORY_CREATE:
    return {...state, categories: state.categories.concat(action.payload)};

    // currentCategories = state.categories.slice(); //making an arr of current categories
    // let newCategory = Object.assign({},
    //   { id: uuidv4(), isEditing: false }, action.value);
    // currentCategories.push(newCategory);
    // return Object.assign(newState, state, { categories: currentCategories });

  case CATEGORY_UPDATE:
    categories = state.categories.map(category => {
      if(category.id === action.payload.id) {
        return { ...category, ...action.payload };
      }
      return category;
    });
    return { ...state, categories };

    // currentCategories = state.categories.slice();
    // let categoryToUpdate = currentCategories.find(category => {
    //   return category.id === action.values.id;
    // });
    // categoryIndex = currentCategories.indexOf(categoryToUpdate);
    // currentCategories[categoryIndex].isEditing = !currentCategories[categoryIndex].isEditing;
    // if (action.values.name) {
    //   currentCategories[categoryIndex].name = action.values.name;
    // }
    // if (action.values.budget) {
    //   currentCategories[categoryIndex].budget = action.values.budget;
    // }
    // return Object.assign(newState, state, { categories: currentCategories });

  case CATEGORY_DESTROY:
    categories = state.categories.filter(category => {
      return action.payload.id !== category.id;
    });
    return {...state, categories};

  default: 
    return state;
  }
  //   currentCategories = state.categories.slice();
  //   let categoryToRemove = currentCategories.find(category => {
  //     return category.id === action.id;
  //   });
  //   categoryIndex = currentCategories.indexOf(categoryToRemove);
  //   currentCategories.splice(categoryIndex, 1);
  //   return Object.assign(newState, state, { categories: currentCategories });
  // }
};

export default categoryReducer;