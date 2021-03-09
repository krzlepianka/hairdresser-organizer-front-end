import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import ClientDetails from '../../ClientDetails/ClientDetails';
import Button from '../../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
import './Client.scss';

const Client = ({ id, client }, props) => {
    const { firstName, lastName, phoneNumber } = client;
    return (
        <div className="client">
            <div className="title">
                <h5>{`${firstName} ${lastName}`}</h5>
            </div>
            <div className="info">
                <p className="phone">{phoneNumber}</p>
            </div>
            <div className="btn-container">
                <Link to={`dashboard/${id}`}>
                    <Button variant="secondary">
                        <FontAwesomeIcon icon={faInfo} size="lg" />
                    </Button>
                </Link>
                <Button variant="secondary">
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                </Button>
            </div>
        </div >
    );
}

export default Client;