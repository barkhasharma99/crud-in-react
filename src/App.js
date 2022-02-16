import "./App.css";
import Adduser from "./components/Adduser";
import Alluser from "./components/Alluser";
import Codeforinterview from "./components/Codeforinterview";
import Navbar from "./components/NavBar";
import {BrowserRouter, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Notfound from "./components/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Codeforinterview} />
        <Route exact path="/all" component={Alluser} />
        <Route exact path="/add" component={Adduser} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  ); 
}


export default App;
