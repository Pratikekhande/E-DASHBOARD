// import logo from './logo.svg';
import './App.css';
import Nav from'./components/Nav'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <h1> E- DASHBOARD</h1> */}
      <Nav/>
      <Routes>
      <Route element={<PrivateComponent/>}>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update" element={<h1> Update Product Component</h1>}/>
        <Route path="/logout" element={<h1> Logout  Component</h1>}/>
        <Route path="/profile" element={<h1>User Profile Component</h1>}/>
      </Route>

        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    </div>
  );
}

export default App;
