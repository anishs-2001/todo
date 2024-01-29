import React from 'react';
import TaskList from './pages/TaskList/TaskList';
import "./App.css"
import InputForm from './pages/InputForm';
import TaskListHandler from './pages/TaskList/TaskListHandler';
import Nav from './components/Nav';
import ThemeContext from './components/themeContext/ThemeContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/tasklist" element={
          <ThemeContext>
            <Nav />
            <TaskListHandler />
          </ThemeContext>} />
        {/* <TaskList></TaskList> */}
        {/* <InputForm></InputForm> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
