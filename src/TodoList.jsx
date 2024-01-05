/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem";

// eslint-disable-next-line react/prop-types
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <ul className="list">
      // eslint-disable-next-line react/prop-types
      {todos.length === 0 && "No ToDos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
