import { Box, Button, Container, Stack, Typography } from '@mui/material';
import '../css/App.css';
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

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to={'/restaurant'}>Restaurant</Link></li>
            <li><Link to={'/community'}>Community</Link></li>
            <li><Link to={'/order'}>Order</Link></li>
            <li><Link to={'/member-page'}>Member</Link></li>
            <li><Link to={'/help'}>Help</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/'}>Home</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/restaurant"> <RestaurantPage /> </Route>
          <Route path="/community"> <CommunityPage /> </Route>
          <Route path="/order"> <OrderPage /> </Route>
          <Route path="/member-page"> <MemberPage/> </Route>
          <Route path="/help"> <HelpPage/> </Route>
          <Route path="/login"> <LoginPage/> </Route>
          <Route path="/"> <Home /> </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
