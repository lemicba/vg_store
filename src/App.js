import { useState } from 'react';
import Navbar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ErrorPage from './Components/Error';
import CartContainer from './Components/CartContainer';
import Slider from './Components/Slider';
import CartCheckout from './Components/CartCheckout';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Store } from './store';

function App() {
  const [data, setData] = useState({
    items: [],
    cantidad: 0, 
  })

  return (
    <>
      <Store.Provider value={[data, setData]}>
        <BrowserRouter>
          <Navbar />
          <Slider/>
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
              <Route exact path="/cart">
                <CartContainer />
              </Route>
              <Route exact path="/checkout">
                <CartCheckout />
              </Route>
              <Route exact path="*">
                <ErrorPage/>
              </Route>
            </Switch>
        </BrowserRouter>
      </Store.Provider>
    </>
  );
}

export default App;
