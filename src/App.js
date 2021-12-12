import { Route, Switch, Redirect } from 'react-router';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Home from './components/Home';
import Features from './components/Features';
import Team from './components/Team';
import Download from './components/Download';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/features" component={Features}></Route>
        <Route exact path="/team" component={Team}></Route>
        <Route exact path="/download" component={Download}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
