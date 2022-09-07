import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  // const todos = fetch("https://631504515b85ba9b11db5f39.mockapi.io/todos").then(
  //   (response) => response.json()
  // );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTodos = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://631504515b85ba9b11db5f39.mockapi.io/todos"
      );
      const todoData = await response.json();
      setTodos(todoData);
      setIsLoading(false);
    };
    getTodos();
  }, [setTodos]);

  if (isLoading) {
    return <p className="text-xl mt-12 dark:text-custom-egg">Loading...</p>;
  }
  if (todos.length === 0) {
    return (
      <div className="grid place-items-center mt-4">
        <TodoForm todos={todos} setTodos={setTodos} />
        <p className="text-xl dark:text-custom-egg">There are no todos yet!</p>
      </div>
    );
  }

  return (
    <div className="grid place-items-center mt-4">
      <TodoForm todos={todos} setTodos={setTodos} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          todoText={todo.content}
          isCompleted={todo.isCompleted}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
