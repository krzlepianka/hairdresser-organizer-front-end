import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import ClientDetails from '../ClientDetails/ClientDetails';
import Client from '../Clients/Client/Client';
import './Clients.scss';


const Clients = ({ clients, deleteClient }) => {
    if (!clients) {
        return <div>loading</div>
    }
    return (
        <div className="clients">
            {clients.map((client, id) => <Client key={id} id={client.id} client={client} deleteClient={deleteClient} />)}
        </div >
    );
}

export default Clients;

