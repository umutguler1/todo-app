import { useRef, useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import ChangeUsernameForm from "../ChangeUsernameForm";
import SwitchMode from "../SwitchMode";

const Header = ({ currentUser, setUsername }) => {
  const [colorTheme, setTheme] = useDarkMode();
  const newNameRef = useRef();

  const [changeNameClicked, setChangeNameClicked] = useState(false);

  const changeNameHandler = (event) => {
    event.preventDefault();
    if (newNameRef.current.value.trim().length === 0) {
      alert("Please enter a name.");
      return;
    }
    localStorage.setItem("username", newNameRef.current.value);
    setUsername(newNameRef.current.value);
    setChangeNameClicked(false);
  };

  return (
    <div className="flex px-8 bg-custom-lilac top-0 font-semibold drop-shadow-xl h-20 w-full items-center justify-between text-custom-white text-base xl:text-2xl">
      {currentUser ? (
        <h3 className="transition-all">
          Hello {currentUser}! Welcome to your TODO App!
        </h3>
      ) : (
        <h3>TODO APP</h3>
      )}
      <div className="flex items-center mr-20">
        {currentUser && !changeNameClicked && (
          <button
            onClick={() => setChangeNameClicked(true)}
            className="text-base xl:text-xl bg-custom-brown p-2 rounded-lg text-custom-egg transition-all hover:brightness-125"
          >
            Change Username
          </button>
        )}
        {changeNameClicked && (
          <ChangeUsernameForm
            changeNameHandler={changeNameHandler}
            newNameRef={newNameRef}
            setChangeNameClicked={setChangeNameClicked}
          />
        )}
      </div>
      <SwitchMode colorTheme={colorTheme} setTheme={setTheme} />
    </div>
  );
};

export default Header;
