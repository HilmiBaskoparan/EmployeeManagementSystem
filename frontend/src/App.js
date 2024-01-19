import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployee from './components/ListEmployee';
import FooterComponent from './components/Footer';
import HeaderComponent from './components/Header';
import CreateEmployee from './components/CreateEmployee';

function App() {
  return (
    
    <div>
      <Router>
        <HeaderComponent />
          <div className='container'>
            <Switch>
              <Route path = "/" exact component = {ListEmployee}></Route>
              <Route path = "/employees" component = {ListEmployee}></Route>
              <Route path = "/add-employee/:id" component = {CreateEmployee}></Route>
              <ListEmployee />
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
