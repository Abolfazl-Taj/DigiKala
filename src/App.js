import { useRoutes } from 'react-router-dom';
import './App.css';
import Routes from './Assets/Routes';

function App() {
  const Route = useRoutes(Routes)
  return Route
}

export default App;
