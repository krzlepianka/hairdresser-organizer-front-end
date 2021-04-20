import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import LoginPage from '../Views/LoginPage/LoginPage';
import AddClient from '../Clients/AddClient/AddClient';
import Dashboard from '../Views/Dashboard/Dashboard';
import ClientDetails from '../ClientDetails/ClientDetails';
import validationRules from '../shared/validationSchema';
import uuid from 'react-uuid'

function Root() {

  const [clients, setClients] = useState([]);
  const [clientFormVisibility, setClientFormVisibility] = useState(false);

  const [client, setClient] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = () => {
    fetch('http://localhost:9090/clients')
      .then(clients => clients.json())
      .then(clients => setClients(clients))
  };

  const deleteClient = (e, id) => {
    console.log(id)
    fetch(`http://localhost:9090/clients/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(response => fetchClients())
  };

  const showClientAddForm = () => {
    setClientFormVisibility(!clientFormVisibility);
  };

  const handleSetUser = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const validateSetUserForm = e => {
    e.preventDefault();
    const { minLength } = validationRules.type.fullName;
    const { onlyNumbers } = validationRules.type.phoneNumber;
    const { firstName, lastName, phoneNumber } = client;
    if (minLength(firstName) && minLength(lastName) && onlyNumbers(phoneNumber)) {
      const user = {
        id: uuid(),
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber
      }
      fetch('http://localhost:9090/clients', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(response => response.json())
        .then(response => fetchClients())
    }
    else {
      console.log('walidacja nieudana')
    }
  };

  return (
    <div>
      {/*<LoginPage />*/}
      <Router>
        <Route exact path='/dashboard' render={() => {
          return <Dashboard
            deleteClient={deleteClient}
            clients={clients}
            fetchClients={fetchClients}
            showClientAddForm={showClientAddForm}
            clientFormVisibility={clientFormVisibility}
            handleSetUser={handleSetUser}
            validateSetUserForm={validateSetUserForm}
          />
        }} />
        <Route exact path='/dashboard/:id' render={(props) => {
          return <ClientDetails clients={clients} {...props} />
        }} />
      </Router>
    </div>
  );
}

export default Root;
