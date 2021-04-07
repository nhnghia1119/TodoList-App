import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import Header from "./layouts/Header";
import Navbar from "./conponents/Navbar";
import TodoScreen from "./screens/TodoScreen";
import HomeScreen from "screens/HomeScreen";
import NewScreen from "screens/NewScreen";
import IntroScreen from "screens/IntroScreen";
import Footer from "layouts/Footer";

function App() {
  return (
    <Router className="App">
      <Header></Header>
      <Navbar></Navbar>
      <main>
        <Switch>
          <Route expect path="/Todo" component={TodoScreen}></Route>
          <Route expect path="/New" component={NewScreen}></Route>
          <Route expect path="/Intro" component={IntroScreen}></Route>
          <Route expect path="/" component={HomeScreen}></Route>
        </Switch>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
