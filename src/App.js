import { useEffect, useState } from "react";
import Header from "./components/Layout/Header";
import TodoList from "./components/Todos/TodoList";
import UsernameForm from "./components/UsernameForm";

function App() {
  const [username, setUsername] = useState("");
  const [todos, setTodos] = useState([]);

  const currentUser = localStorage.getItem("username");
  useEffect(() => {
    setUsername(currentUser);
  }, [currentUser]);

  const setUserHandler = (name) => {
    localStorage.setItem("username", name);
    setUsername(localStorage.getItem("username"));
  };
  return (
    <div className="text-center min-h-screen bg-custom-egg text-custom-black place-items-center duration-700 transition-all dark:bg-custom-dark ">
      <Header currentUser={currentUser} setUsername={setUsername} />
      {!username && <UsernameForm onAddUser={setUserHandler} />}
      <div className="mx-8">
        {username && (
          <div>
            <TodoList todos={todos} setTodos={setTodos} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
