import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginView from "../src/components/LoginView";
import DataStore from './DataStore';

function App() {
    return(
      <div className="App">
        <Router>
          <Switch>
            <Route path="/DataStore" exact component={() => <DataStore />} />
            <Route path="/" exact component={() => <LoginView />} />
          </Switch>
        </Router>
        
      </div>
    )
}

export default App;
