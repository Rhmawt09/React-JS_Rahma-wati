import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar'
import Sidebar from './component/Sidebar'
import Content from './component/Content';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='row text-light'>
        <div className='col-2 bg-dark'>
          <Sidebar/>
        </div>
        <div className='col-10 bg-white text-dark'>
          <Content/>
          </div>
        </div>
       </div>

  
 
  );
}

export default App;
