const buttonClasses =
  "px-2 py-1 rounded-md bg-custom-lilac text-custom-black font-semibold drop-shadow-md border-2 border-custom-brown transition-all duration-700 hover:brightness-125 dark:bg-custom-black dark:text-custom-egg dark:border-custom-lilac dark:hover:brightness-150";

const TodoItemMainButtons = ({
  id,
  changeStatusHandler,
  removeItemHandler,
  isUpdateClicked,
  setIsUpdateClicked,
}) => {
  return (
    <div className="flex gap-x-3 justify-around">
      <button className={buttonClasses} onClick={changeStatusHandler}>
        Change Status
      </button>

      <button onClick={removeItemHandler} className={buttonClasses}>
        Delete
      </button>
      {!isUpdateClicked && (
        <button
          id={id}
          onClick={() => setIsUpdateClicked(true)}
          className={buttonClasses}
        >
          Change Todo
        </button>
      )}
    </div>
  );
};

export default TodoItemMainButtons;
