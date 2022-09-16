import "./App.css";
import User from "./components/User";
import UserInformation from "./views/UserInformation";
import UserView from "./views/UserView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" name="Home" element={<UserView />} />
          <Route exact path="/user/:id" element={<UserInformation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
