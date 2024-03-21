import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import CounterApp from './CounterApp.js';
import Calculator from './Calculator.js';
import TodoApp from './TodoApp.js';
import ColorPicker from './ColorPicker.js';
import Homepage from './Homepage.js';
import SignupForm from './SignupForm.js';
import Login from './login.js';
import Logout from './logout.js';
import ChangePassword from './changepassword.js';
import NewPassword from './newpassword.js';
import ResetPassword from './resetpassword.js';
import FetchDemo from './ApiFetchDemo.js';
import ApiAxiosDemo from './ApiAxiosDemo.js';
class App extends Component {
  render() {
    return (
      <Router>
        <ol>
        <li>
          <Link to="/CounterApp">Counter</Link>
        </li>
        <li>
            <Link to="/Calculator">Calculator</Link>
        </li>
        
        <li>
            <Link to="/TodoApp">TodoApp</Link>
        </li>
        <li>
            <Link to="/ColorPicker">ColorPicker</Link>
        </li>
        <li>
            <Link to="/SignupForm">SignUpForm</Link>
        </li>
        <li>
            <Link to="/ApiFetchDemo">ApiUsingFetch </Link>
        </li>
        <li>
            <Link to="/ApiAxiosDemo">ApiUsingAxios</Link>
        </li>
        </ol>
        <Routes>
          <Route path='/CounterApp' element={<CounterApp/>} />
          <Route path='/Calculator' element={<Calculator/>} />
          <Route path='/TodoApp' element={<TodoApp/>}/>
          <Route path='/ColorPicker' element={<ColorPicker/>}/>
          <Route path='/SignupForm' element={<SignupForm/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='logout' element={<Logout/>}/>
          <Route path='/Homepage' element={<Homepage/>}/>
          <Route path='/resetpassword' element={<ResetPassword/>}/>
          <Route path='/newpassword' element={<NewPassword/>}/>
          <Route path='/changepassword' element={<ChangePassword/>}/>
          <Route path='/ApiFetchDemo' element={<FetchDemo/>}/>
          <Route path='/ApiAxiosDemo' element={<ApiAxiosDemo/>}/>
        </Routes>
      </Router>
    );
  }
}
export default App;