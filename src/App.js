import logo from './logo.svg';
import './App.css';

//components
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'
import Experiences from './components/experiences'
import Acheivements from './components/acheivements'
import { Link,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='navs'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/experiences'>Experiences</Link>
        <Link to='/acheivements'>Acheivemnets</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/experiences' component={Experiences}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/acheivements' component={Acheivements}/>
      
     
     
    </div>
  );
}

export default App;
