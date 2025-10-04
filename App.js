import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {ToDos} from "./MyComponents/ToDos";


function App() {
  let myVariable=345;
  return (
    <>
   <Header title="My ToDos List" searchBar={False}/>   
   <ToDos/>
   <Footer/>
    </>
    
        
  );
}

export default App;
