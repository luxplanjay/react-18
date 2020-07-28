import React from 'react';
import classNames from 'classnames';
import Todo from '../Todo';
import './TodoList.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) =>
  console.log('TodoList re-render') || (
    <ul className="TodoList">
      {todos.map(({ id, description, completed }) => (
        <li
          key={id}
          className={classNames('TodoList__item', {
            'TodoList__item--completed': completed,
          })}
        >
          <Todo
            text={description}
            completed={completed}
            onToggleCompleted={() =>
              onToggleCompleted({ id, completed: !completed })
            }
            onDelete={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );

export default TodoList;
