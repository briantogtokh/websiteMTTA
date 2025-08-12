import { Router, Route } from 'wouter';
import HomePage from '../pages/HomePage';

export default function AppRouter() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
    </Router>
  );
}
