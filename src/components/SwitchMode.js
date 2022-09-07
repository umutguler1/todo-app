const SwitchMode = ({ colorTheme, setTheme }) => {
  return (
    <div className="flex text-base xl:text-xl font-normal gap-x-8 items-center">
      <p
        className={
          colorTheme === "dark"
            ? "bg-yellow-400 font-semibold transition-all duration-700 py-2 px-4 rounded-lg -mx-4"
            : "font-semibold transition-all duration-700"
        }
      >
        Light
      </p>
      <button
        onClick={() => setTheme(colorTheme)}
        className="px-3 py-2 rounded-lg bg-custom-brown text-custom-egg transition-all hover:brightness-125"
      >
        ← Switch Mode →
      </button>

      <p
        className={
          colorTheme === "light"
            ? "bg-indigo-900 font-semibold text-custom-egg transition-all duration-700 py-2 px-4 -mx-4 rounded-lg"
            : "font-semibold transition-all duration-700"
        }
      >
        Dark
      </p>
    </div>
  );
};

export default SwitchMode;
