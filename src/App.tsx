import React, { lazy, Suspense } from "react";
import TaskList from "./pages/TaskList/TaskList";
import "./App.css";
import InputForm from "./pages/InputForm";
// import TaskListHandler from "./pages/TaskList/TaskListHandler";
// import Nav from "./components/Nav";
// import ThemeContext from "./components/themeContext/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Counter from "./pages/counter/Counter";
import ColorBox from "./pages/colourBox/ColorBox";

const TaskListHandler = lazy(() => import("./pages/TaskList/TaskListHandler"));
const Nav = lazy(() => import("./components/Nav"));
const ThemeContext = lazy(
  () => import("./components/themeContext/ThemeContext")
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/tasklist"
          element={
            <Suspense fallback={<>Loading</>}>
              <ThemeContext>
                <Nav />
                <TaskListHandler />
              </ThemeContext>
            </Suspense>
          }
        />
        {/* <TaskList></TaskList> */}
        {/* <InputForm></InputForm> */}
      </Routes>
    </BrowserRouter>

    // <Counter />

    // <ColorBox />
  );
}

export default App;
