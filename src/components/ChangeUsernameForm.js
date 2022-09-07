import React from "react";

const ChangeUsernameForm = ({
  changeNameHandler,
  newNameRef,
  setChangeNameClicked,
}) => {
  return (
    <div>
      <form onSubmit={changeNameHandler} className="flex items-center gap-x-2">
        <label htmlFor="newName" className="xl:text-xl">
          New Username:
        </label>
        <input
          id="newName"
          ref={newNameRef}
          autoFocus
          className="w-48 xl:text-lg rounded-lg p-1 border-2 border-custom-brown"
        ></input>
        <div className="grid gap-y-1">
          <button
            type="submit"
            className="xl:text-lg px-1 rounded-lg bg-custom-brown text-custom-egg transition-all hover:brightness-125"
          >
            Done
          </button>
          <button
            onClick={() => setChangeNameClicked(false)}
            className="text-lg px-1 rounded-lg bg-custom-brown text-custom-egg transition-all hover:brightness-125"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeUsernameForm;
