import { useRef } from "react";

const UsernameForm = ({ onAddUser }) => {
  const usernameInputRef = useRef();

  const usernameFormSubmitHandler = (event) => {
    event.preventDefault();
    if (usernameInputRef.current.value.trim().length === 0) {
      alert("Please enter a name.");
      return;
    }
    onAddUser(usernameInputRef.current.value);
  };

  return (
    <div className="text-center min-h-screen transition-all duration-700 dark:text-custom-egg">
      <h3 className="text-5xl my-8 font-semibold">What should we call you?</h3>
      <form
        onSubmit={usernameFormSubmitHandler}
        className="grid gap-y-4 place-items-center"
      >
        <div className="flex gap-x-4 my-4 items-center">
          <label htmlFor="username" className="text-2xl">
            Username:
          </label>
          <input
            id="username"
            ref={usernameInputRef}
            autoFocus
            className="bg-white px-2 py-1 text-3xl h-14 border-2 border-custom-brown rounded-md dark:text-custom-black"
          ></input>
        </div>
        <button className="text-4xl px-6 py-3 mt-4 rounded-lg bg-custom-brown text-white transition-all hover:scale-125">
          Alright!
        </button>
      </form>
    </div>
  );
};

export default UsernameForm;
