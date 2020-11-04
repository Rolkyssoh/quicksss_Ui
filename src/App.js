import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.compenent';
import ListingPage from './pages/listing/listing.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/listing' component={ListingPage} />
      </Switch>
    </div>
  );
}

export default App;
