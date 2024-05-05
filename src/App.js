
import './App.css';
import TaskList from "./components/TaskList.jsx";



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {



  return (
    <div className='text-center' >
        <TaskList></TaskList>
    </div>
  );
}

export default App;
