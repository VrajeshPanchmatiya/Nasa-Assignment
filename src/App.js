import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NasaUserForm from "./Components/NasaUserForm";
import NasaUserDetail from "./Components/NasaUserDetail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={NasaUserForm} />
          <Route path="/NasaUserDetail" component={NasaUserDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
