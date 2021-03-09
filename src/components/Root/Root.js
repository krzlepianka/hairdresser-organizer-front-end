import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import LoginPage from '../Views/LoginPage/LoginPage';
import AddClient from '../Clients/AddClient/AddClient';
import Dashboard from '../Views/Dashboard/Dashboard';
import ClientDetails from '../ClientDetails/ClientDetails';

function Root() {

  const [clients, setClients] = useState([]);


  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = () => {
    fetch('http://localhost:8000/clients')
      .then(clients => clients.json())
      .then(clients => setClients(clients))
  };

  return (
    <div>
      {/*<LoginPage />*/}
      <Router>
        <Route exact path='/dashboard' render={() => {
          return <Dashboard clients={clients} fetchClients={fetchClients} />
        }} />
        <Route exact path='/dashboard/:id' render={(props) => {
          return <ClientDetails {...props} />
        }} />
        <Route exact path="/newClient" render={(props) => {
          return <AddClient />
        }} />
      </Router>
    </div>
  );
}

export default Root;
