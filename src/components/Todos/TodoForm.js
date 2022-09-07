import { useRef, useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [isAdding, setIsAdding] = useState(false);

  const todoInputRef = useRef();
  const addTodoHandler = (event) => {
    event.preventDefault();
    if (todoInputRef.current.value.trim().length < 3) {
      alert("Todo must be at least 3 characters long!");
      todoInputRef.current.value = ""; // Normally, DOM manipulation is not ideal, however, in a simple app like this one, there would not be any harm done.
      return;
    }
    setIsAdding(true);

    const todoDataToBeSent = {
      content: todoInputRef.current.value,
      isCompleted: false,
      id: Math.random(),
    };
    fetch("https://631504515b85ba9b11db5f39.mockapi.io/todos", {
      method: "POST",
      body: JSON.stringify(todoDataToBeSent),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((todoItem) => setTodos([...todos, todoItem]))
      .then(() => setIsAdding(false))
      .then(() => (todoInputRef.current.value = ""));
  };

  return (
    <div className="grid mb-4">
      <form onSubmit={addTodoHandler} className="flex gap-x-2 items-center">
        <label
          htmlFor="todoInput"
          className="font-semibold text-xl transition-all duration-700 dark:text-custom-egg"
        >
          TODO:
        </label>
        <input
          id="todoInput"
          type="text"
          ref={todoInputRef}
          className="bg-white text-lg px-1 border-2 border-custom-brown rounded-md dark:bg-custom-egg dark:text-custom-black "
        ></input>
        <button
          type="submit"
          className="px-2 py-1 ml-2 text-xl bg-custom-brown text-white rounded-lg hover:scale-125 transition-all"
        >
          ADD TODO
        </button>
      </form>
      {isAdding && (
        <p className="place-self-center text-lg dark:text-custom-egg">
          Adding...
        </p>
      )}
    </div>
  );
};

export default TodoForm;
