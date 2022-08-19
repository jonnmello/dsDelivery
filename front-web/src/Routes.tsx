import { Route, Router, Switch } from "react-router-dom";
import history from "./history";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Orders";

const Routes = () => (

    <Router history={history}>
        <Navbar />
        <Switch>
            <Route path="/orders" exact>
                <Orders />
            </Route>
            <Route path="/" exact>
                <Home />
            </Route>
        </Switch>
    </Router>


);

export default Routes;