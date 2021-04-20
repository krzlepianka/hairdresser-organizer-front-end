import { useState, useEffect } from 'react';
import Wrapper from '../shared/Wrapper/Wrapper';
import Header from '../Header/Header';
import './ClientDetails.scss';
import { faChevronRight, faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ClientDetails = ({ match }) => {
    const { id } = match.params;
    const [currentClient, setCurrentClient] = useState();
    const [currentVisit, setCurrentVisit] = useState();
    const [imageVisible, setImageVisible] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState("");

    useEffect(() => {
        fetchClient();
    }, []);

    const fetchClient = () => {
        fetch(`http://localhost:9090/clients/${id}`)
            .then(client => client.json())
            .then(client => setCurrentClient(client))
    };

    const handleVisit = (e, visit) => {
        setCurrentVisit(visit);
    };

    const deleteVisit = (e, visit) => {
        fetch(`http://localhost:9090/clients/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },

            })
    }

    const handleImage = (e, photo) => {
        e.preventDefault();
        setImageVisible(true)
        handleCurrentPhoto(photo);
    };

    const handleCurrentPhoto = (photo) => {
        currentVisit.gallery.find(src => src === photo ? setCurrentPhoto(photo) : '');
    };


    const hidePhoto = () => {
        setImageVisible(false);
    }

    const handleNextImage = () => {
        const photo = currentPhoto;
        let nextPhoto = '';
        const photoIndex = currentVisit.gallery.findIndex(el => el === photo);
        if (photoIndex === currentVisit.gallery.length - 1) {
            nextPhoto = currentVisit.gallery[0];
        }
        else {
            nextPhoto = currentVisit.gallery[photoIndex + 1];
        }
        setCurrentPhoto(nextPhoto);
    };

    const handlePreviousImage = () => {
        const photo = currentPhoto;
        let previousPhoto = '';
        const photoIndex = currentVisit.gallery.findIndex(el => el === photo);
        if (photo === currentVisit.gallery[0]) {
            previousPhoto = currentVisit.gallery[currentVisit.gallery.length - 1];
        }
        else {
            previousPhoto = currentVisit.gallery[photoIndex - 1];
        }
        setCurrentPhoto(previousPhoto);
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
                                    <FontAwesomeIcon onClick={hidePhoto} className="client-button-delete" onClick={e => deleteVisit(e, visit)} icon={faTimes} size="lg" />
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
                        {currentVisit ? currentVisit.gallery.map(photo => <img className="client-image" src={photo} onClick={(e) => handleImage(e, photo)} />) : ""}
                    </ul>
                </div>
            </div>
            <div className={`${imageVisible ? "gallery-show" : "gallery-hide"}`}>
                <div className="image-container">
                    <FontAwesomeIcon onClick={hidePhoto} className="image-return" icon={faTimes} size="lg" />
                    <div className="gallery-image">
                        <FontAwesomeIcon onClick={handleNextImage} icon={faChevronRight} size="lg" />
                        <img className="image" src={currentPhoto} alt="hair" />
                        <FontAwesomeIcon onClick={handlePreviousImage} icon={faChevronLeft} size="lg" />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default ClientDetails;