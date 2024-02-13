import { Box, Button, Container, Stack, Typography } from '@mui/material';
import '../css/App.css';
import '../css/navbar.css';
import { RippleBadge } from './MaterialTheme/styled';

/* REACT ROUTER DOM */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { RestaurantPage } from './screens/RestaurantPage';
import { CommunityPage } from './screens/CommunityPage';
import { OrderPage } from './screens/OrderPage';
import { MemberPage } from './screens/MemberPage';
import { HelpPage } from './screens/HelpPage';
import { Home } from './screens/HomePage';
import { LoginPage } from './screens/LoginPage';
import { NavbarHome } from './components/headers';
import { NavbarResturant } from './components/headers/restaurant';
import { NavbarOthers } from './components/headers/others';
import { useState } from 'react';

function App() {
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  return (
    <Router>

      {main_path == "/" ? (<NavbarHome setPath={setPath} />) : main_path.includes("/restaurant") ? (<NavbarResturant setPath={setPath} />)
      : (<NavbarOthers setPath={setPath} /> )}

        {/* <nav>
          <ul>
            <li><Link to={'/restaurant'}>Restaurant</Link></li>
            <li><Link to={'/community'}>Community</Link></li>
            <li><Link to={'/order'}>Order</Link></li>
            <li><Link to={'/member-page'}>Member</Link></li>
            <li><Link to={'/help'}>Help</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/'}>Home</Link></li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/restaurant"> <RestaurantPage /> </Route>
          <Route path="/community"> <CommunityPage /> </Route>
          <Route path="/order"> <OrderPage /> </Route>
          <Route path="/member-page"> <MemberPage/> </Route>
          <Route path="/help"> <HelpPage/> </Route>
          <Route path="/login"> <LoginPage/> </Route>
          <Route path="/"> <Home /> </Route>
        </Switch>
    </Router>
  );
}

export default App;
