import { useEffect } from 'react';
import Wrapper from '../../shared/Wrapper/Wrapper';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Clients from '../../Clients/Clients';
import '../../Image/Image.scss';
import AddClient from '../../Clients/AddClient/AddClient';

const Dashboard = ({
    clients,
    deleteClient,
    clientFormVisibility,
    showClientAddForm,
    handleSetUser,
    validateSetUserForm }) => {
    return (
        <Wrapper variant="dashboard">
            <NavigationBar
                showClientAddForm={showClientAddForm}
                variant="logo"
            />
            <Clients
                deleteClient={deleteClient}
                clients={clients}
            />
            {clientFormVisibility ? <AddClient showClientAddForm={showClientAddForm} handleSetUser={handleSetUser} validateSetUserForm={validateSetUserForm} /> : null}
        </Wrapper>
    );
}

export default Dashboard;