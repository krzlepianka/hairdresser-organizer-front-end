import { useState, useEffect } from 'react';
import Wrapper from '../shared/Wrapper/Wrapper';
import Header from '../Header/Header';
import './ClientDetails.scss';


const ClientDetails = ({ match }) => {
    const { id } = match.params;
    const [currentClient, setCurrentClient] = useState();
    const [currentVisit, setCurrentVisit] = useState();

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = () => {
        fetch(`http://localhost:8000/clients/${id}`)
            .then(client => client.json())
            .then(client => setCurrentClient(client))
    };

    const handleVisit = (e, visit) => {
        setCurrentVisit(visit);
    }

    return (

        <Wrapper variant="client-details">
            <div className="client-visits client-detail">
                <ul className="client-details-ul">
                    <Header variant="primary">Wizyty</Header>
                    {currentClient
                        ? currentClient.visits.map(visit => {
                            return (
                                <li
                                    key={visit.id}
                                    onClick={e => handleVisit(e, visit)}
                                    className="client-visit"
                                >
                                    <p className="client-details-p">{visit.title} {visit.date}</p>
                                </li>
                            )
                        })
                        : ""}
                </ul>
            </div>
            <div className="client-visits-details client-detail">
                <div>
                    {currentVisit ? <p>{currentVisit.description}</p> : ""}
                </div>
            </div>
            <div className="client-visits-galery client-detail">
                <div>
                    <ul>
                        {currentVisit ? currentVisit.gallery.map(photo => <img className="client-image" src={photo} />) : ""}
                    </ul>
                </div>
            </div>
        </Wrapper>
    );
}

export default ClientDetails;