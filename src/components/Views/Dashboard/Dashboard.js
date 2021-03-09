import { useEffect } from 'react';
import Wrapper from '../../shared/Wrapper/Wrapper';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Clients from '../../Clients/Clients';
import '../../Image/Image.scss';

const Dashboard = ({ clients }) => {

    return (
        <Wrapper variant="dashboard">
            <NavigationBar
                variant="logo"
            />
            <Clients
                clients={clients}
            />
            {/*<Card />*/}
        </Wrapper>
    );
}

export default Dashboard;