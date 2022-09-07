import { useRef, useState } from "react";
import TodoItemMainButtons from "./TodoItemMainButtons";
import TodoUpdateForm from "./TodoUpdateForm";

const TodoItem = ({ todoText, isCompleted, id, todos, setTodos }) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isStatusChanging, setIsStatusChanging] = useState(false);

  const updatedTodoRef = useRef();

  const removeItemHandler = async () => {
    setIsRemoving(true);
    const deletedItem = await fetch(
      `https://631504515b85ba9b11db5f39.mockapi.io/todos/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    ).then((response) => response.json());
    const newTodos = todos.filter((item) => item.id !== deletedItem.id);
    setTodos(newTodos);
    setIsRemoving(false);
  };

  const updateItemHandler = async (event) => {
    event.preventDefault();
    if (updatedTodoRef.current.value.trim().length < 3) {
      alert("Todo must be at least 3 characters long!");
      setIsUpdating(false);
      return;
    }

    const updatedItem = await fetch(
      `https://631504515b85ba9b11db5f39.mockapi.io/todos/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id,
          isCompleted,
          content: updatedTodoRef.current.value,
        }),
        headers: { "Content-Type": "application/json" },
      }
    ).then((response) => response.json());
    const updatedItemIndex = todos.findIndex(
      (item) => item.id === updatedItem.id
    );
    let newTodos = [...todos];
    newTodos[updatedItemIndex].content = updatedItem.content;

    setTodos(newTodos);
    setIsUpdating(false);
    setIsUpdateClicked(false);
  };

  const changeStatusHandler = async () => {
    setIsStatusChanging(true);
    const updatedItem = await fetch(
      `https://631504515b85ba9b11db5f39.mockapi.io/todos/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id,
          isCompleted: !isCompleted,
          content: todoText,
        }),
        headers: { "Content-Type": "application/json" },
      }
    ).then((response) => response.json());

    const updatedItemIndex = todos.findIndex(
      (item) => item.id === updatedItem.id
    );
    let newTodos = [...todos];
    newTodos[updatedItemIndex].isCompleted = updatedItem.isCompleted;

    setTodos(newTodos);
    setIsStatusChanging(false);
  };

  return (
    <div className="w-fit grid mb-4 gap-y-2 p-3 border-2 border-custom-dark rounded-md transition-all duration-700 dark:border-custom-brown dark:text-custom-egg ">
      {!isUpdateClicked ? (
        <div className="flex gap-x-1">
          <p className="font-semibold">Todo:</p>
          <p>{todoText}</p>
        </div>
      ) : (
        <TodoUpdateForm
          updateItemHandler={updateItemHandler}
          todoText={todoText}
          updatedTodoRef={updatedTodoRef}
          setIsUpdating={setIsUpdating}
          setIsUpdateClicked={setIsUpdateClicked}
          isUpdating={isUpdating}
        />
      )}
      <div className="flex gap-x-2">
        <p className="font-semibold">Status:</p>
        {isCompleted ? (
          <p className="text-green-600">completed</p>
        ) : (
          <p className="text-red-600">not completed</p>
        )}
      </div>
      <TodoItemMainButtons
        changeStatusHandler={changeStatusHandler}
        removeItemHandler={removeItemHandler}
        isUpdateClicked={isUpdateClicked}
        setIsUpdateClicked={setIsUpdateClicked}
        id={id}
      />
      {isRemoving && <p className="place-self-center">Deleting todo...</p>}
      {isStatusChanging && (
        <p className="place-self-center">Changing the status...</p>
      )}
    </div>
  );
};

export default TodoItem;
