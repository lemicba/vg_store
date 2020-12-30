import Navbar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ErrorPage from './Components/Error';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path="/">
            <div className="cards-container"> 
              <ItemListContainer />
            </div>
            </Route>
            <Route exact path="/categoria/:categname">
            <div className="cards-container">
              <ItemListContainer />
            </div>
            </Route>
            <Route exact path="/item/:itemid">
              <ItemDetailContainer />
            </Route>
            <Route exact path="*">
              <ErrorPage/>
            </Route>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
