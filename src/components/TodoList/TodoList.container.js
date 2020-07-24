import { connect } from 'react-redux';
import TodoList from './TodoList';
import { todosOperations, todosSelectors } from '../../redux/todos';

const mapStateToProps = state => ({
  todos: todosSelectors.getVisibleTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosOperations.deleteTodo(id)),
  onToggleCompleted: id => dispatch(todosOperations.toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
