import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./Pages/Welcom";
import Product from "./Pages/Product";
import MainHeader from "./component/MainHeader";
import ProdactDitail from "./Pages/Prodactdetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="Welcome" />
          </Route>
          <Route path="/Welcome">
            <Welcome />
          </Route>
          <Route path="/Prodact" exact>
            <Product />
          </Route>
          <Route path="/prodact/:prodactId">
            <ProdactDitail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

//our-domain.com/ => Component A
// our-domain.com/prodacts/ => Component  B
