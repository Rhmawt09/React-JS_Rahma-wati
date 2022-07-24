import Navbar from "./component/Navbar";
import './App.css'
import TodoList from "./component/todolist";
import AboutApp from "./component/AboutApp";
import AboutAuthor from "./component/AboutAuthor";
import NotFound404 from "./component/notfound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<TodoList/>} />
          <Route path="/about/about-app" element={<AboutApp />} />
          <Route path="/about/about-author" element={<AboutAuthor />} />
          <Route path="*" element={<NotFound404/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
