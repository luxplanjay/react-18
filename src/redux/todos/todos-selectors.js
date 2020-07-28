import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.todos.loading;

const getFilter = state => state.todos.filter;

const getAllTodos = state => state.todos.items;

const getTotalTodoCount = state => {
  const todos = getAllTodos(state);

  return todos.length;
};

const getCompletedTodoCount = createSelector([getAllTodos], todos => {
  console.log('Высчитываю новое колво комплитед тудуз');
  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
});

const getVisibleTodos = createSelector(
  [getAllTodos, getFilter],
  (todos, filter) => {
    console.log('Составляю новый массив видимых туду');
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(({ description }) =>
      description.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getLoading,
  getFilter,
  getVisibleTodos,
  getTotalTodoCount,
  getCompletedTodoCount,
};

// const getCompletedTodosCount = state => {
//   const todos = getAllTodos(state);

//   return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
// };

// const getVisibleTodos = state => {
//   const todos = getAllTodos(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return todos.filter(({ text }) =>
//     text.toLowerCase().includes(normalizedFilter),
//   );
// };
