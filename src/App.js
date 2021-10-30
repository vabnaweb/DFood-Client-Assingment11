import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Contex/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header/Header';

import LogIn from './Components/Header/LogIn/LogIn';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home/Home';

import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PlaceOrder from './Components/Home/PlaceOrder/PlaceOrder';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/placeorder/:OrderId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
