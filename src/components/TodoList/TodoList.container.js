import { connect } from 'react-redux';
import TodoList from './TodoList';
import { todosOperations, todosSelectors } from '../../redux/todos';

const mapStateToProps = state => ({
  todos: todosSelectors.getVisibleTodos(state),
});

const mapDispatchToProps = {
  onDeleteTodo: todosOperations.deleteTodo,
  onToggleCompleted: todosOperations.toggleCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
