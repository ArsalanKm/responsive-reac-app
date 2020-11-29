import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import SingleRoom from "./pages/SingleRoomPage/SingleRoom";
import RoomsPage from "./pages/RoomsPage/RoomsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/rooms/" component={RoomsPage} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        {/* rout with no path with always match */}
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
