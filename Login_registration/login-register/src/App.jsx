import './App.css';
import Homepage from './component/homepage/homepage';
import Login from './component/login/login';
import Register from './component/register/register';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <BrowserRouter>     
         <Routes>

          <Route exact path="/" element = {<Homepage />}>  </Route> 
          <Route path="/login" element ={ <Login />}> </Route>
          <Route path="/register" element ={<Register />}> </Route>
        </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
