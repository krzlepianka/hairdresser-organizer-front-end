import { useState, useEffect } from 'react';
import Wrapper from '../shared/Wrapper/Wrapper';
import Header from '../Header/Header';
import './ClientDetails.scss';
import { faChevronRight, faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ClientDetails = ({ match }) => {
    const { id } = match.params;
    const [currentVisit, setcurrentVisit] = useState();
    const [visitInformation, setvisitInformation] = useState();
    const [currentGallery, setCurrentGallery] = useState();
    const [imageVisible, setImageVisible] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState("");

    useEffect(() => {
        fetchVisit();

    }, []);

    const fetchVisit = () => {
        fetch(`http://localhost:9090/clients/${id}/visits`)
            .then(visit => visit.json())
            .then(visit => {
                setcurrentVisit(visit)
            })
    };

    const handleVisit = (e, visit) => {
        console.log(visit.description)
        fetch(`http://localhost:9090/visits/${visit.id}/gallery`)
            .then(gallery => gallery.json())
            .then(gallery => {
                setCurrentGallery(gallery);
                setvisitInformation(visit);
            })
    };

    const deleteVisit = (e, visit) => {
        e.stopPropagation();
        fetch(`http://localhost:9090/visits/${visit.id}?_embed=gallery`, {
            method: 'DELETE',
            header: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                fetchVisit();
            })
    };

    const deleteVisitDescription = (e) => {
        console.log('click click srt')
    }

    const handleImage = (e, photo) => {
        e.preventDefault();
        setImageVisible(true)
        handleCurrentPhoto(photo);
        console.log(currentGallery)
    };

    const handleCurrentPhoto = (photo) => {
        currentGallery.map(el => el.image === photo.image ? setCurrentPhoto(photo.image) : '');
    };


    const hidePhoto = () => {
        setImageVisible(false);
    }

    const handleNextImage = () => {
        const photo = currentPhoto;
        let nextPhoto = '';
        const photoIndex = currentGallery.findIndex(el => el.image == photo);
        if (photoIndex === currentGallery.length - 1) {
            nextPhoto = currentGallery[0].image;
        }
        else {
            nextPhoto = currentGallery[photoIndex + 1].image;
        }
        setCurrentPhoto(nextPhoto);
    };

    const handlePreviousImage = () => {
        const photo = currentPhoto;
        let previousPhoto = '';
        const photoIndex = currentGallery.findIndex(el => el.image == photo);
        if (photo === currentGallery[0].image) {
            previousPhoto = currentGallery[currentGallery.length - 1].image;
        }
        else {
            previousPhoto = currentGallery[photoIndex - 1].image;
        }
        setCurrentPhoto(previousPhoto);
    }


    return (

        <Wrapper variant="client-details">
            <div className="client-visits client-detail">
                <ul className="client-details-ul">
                    <Header variant="primary">Wizyty</Header>
                    {currentVisit
                        ? currentVisit.map(visit => {
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
                    {visitInformation ? <p>{visitInformation.description}</p> : ""}
                </div>
            </div>
            <div className="client-visits-galery client-detail">
                <div>
                    <ul>
                        {currentGallery ? currentGallery.map(photo => <img className="client-image" src={photo.image} onClick={(e) => handleImage(e, photo)} />) : ""}
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