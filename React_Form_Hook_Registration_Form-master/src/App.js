import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import LoginPage from './components/LoginPage';
import EmployeePage from './components/EmployeePage';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route excet path='/' element={<LoginPage/>}/>
      <Route path='/employee' element={<EmployeePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
