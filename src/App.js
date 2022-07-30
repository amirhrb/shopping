import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

//components
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Info from "./components/Info";
import Store from "./components/Store";
import Details from "./components/shared/Details";
import Cart from "./components/Cart";

//contexts
import ScrollProvider from "./contexts/ScrollProvider";
import ProductProvider from "./contexts/ProductProvider";
import CartProvider from "./contexts/CartProvider";

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <ScrollProvider>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/store/details/:id" component={Details} />
              <Route path="/store/cart" component={Cart} />
              <Route path="/store" component={Store} />
              <Route path="/info" component={Info} />
              <Route path="/home" component={Homepage} />
              <Redirect from="/*" to="/home" />
            </Switch>
          </div>
        </ScrollProvider>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
