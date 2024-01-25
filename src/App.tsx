import React from 'react';
import TaskList from './pages/TaskList/TaskList';
import "./App.css"
import InputForm from './pages/InputForm';
import TaskListHandler from './pages/TaskList/TaskListHandler';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      {/* <TaskList></TaskList> */}

      {/* <InputForm></InputForm> */}

      <Nav></Nav>
      <TaskListHandler />
    </div>
  );
}

export default App;
