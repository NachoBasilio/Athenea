import { LocationProvider, Router, Route } from 'preact-iso';
import Home from '../routes/Home';
import Login from '../routes/Login';
import About from '../routes/About';

export default function App() {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={Login} />

        <Route path="/login" component={Login} />

        <Route path="/about" component={About} />
      </Router>
    </LocationProvider>
  );
}