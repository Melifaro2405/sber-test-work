import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import TaskList from "./components/TaskList/TaskList";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import {TaskListContext as Context} from './context'
import {data} from "./data";
import './App.css';

function App() {
  const [taskList, setTaskList] = useState(data)

  const handleDeleteTask = (taskName) => {
    const updatedList = taskList?.filter(task => task.name !== taskName)
    setTaskList(updatedList)
  }

  return (
    <>
      <Context.Provider value={{taskList, handleDeleteTask}}>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/todolist' element={<TaskList />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
