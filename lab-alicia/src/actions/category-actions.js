import uuidv4 from 'uuid/v4';

export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DESTROY = 'CATEGORY_DESTROY';

export const categoryCreate = category => {
  category.id = uuidv4();
  return {type: CATEGORY_CREATE, payload: category};
};

export const categoryUpdate = category => {
  return {type: CATEGORY_UPDATE, payload: category};
};

export const categoryDestroy = categoryId => {
  return {type: CATEGORY_DESTROY, payload: {id: categoryId}};
};