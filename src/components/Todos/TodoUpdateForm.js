const TodoUpdateForm = ({
  updateItemHandler,
  todoText,
  updatedTodoRef,
  setIsUpdating,
  setIsUpdateClicked,
  isUpdating,
}) => {
  return (
    <div>
      <form onSubmit={updateItemHandler} className="flex">
        <input
          defaultValue={todoText}
          ref={updatedTodoRef}
          autoFocus
          className="px-1 border-2 border-custom-brown rounded-sm transition-all duration-700 dark:text-custom-black"
        ></input>
        <div className="flex gap-x-2 px-2 text-custom-dark">
          <button
            type="submit"
            onClick={() => setIsUpdating(true)}
            className="bg-custom-brown text-white px-2 rounded-md hover:brightness-125 transition-all"
          >
            Done!
          </button>
          <button
            onClick={() => setIsUpdateClicked(false)}
            className="bg-custom-brown text-white px-2 rounded-md hover:brightness-125 transition-all"
          >
            Close
          </button>
        </div>
      </form>
      {isUpdating && (
        <p className="float-right mr-8 mt-1 -mb-8">Updating Todo...</p>
      )}
    </div>
  );
};

export default TodoUpdateForm;
