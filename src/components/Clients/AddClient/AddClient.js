import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import Wrapper from '../../shared/Wrapper/Wrapper';
import './AddClient.scss';

const AddClient = ({ showClientAddForm, handleSetUser, validateSetUserForm }) => {
    return (
        <Wrapper variant="add-client">
            <form onSubmit={validateSetUserForm} className="form--primary">
                <FontAwesomeIcon onClick={showClientAddForm} className="remove-icon" icon={faTimes} size="lg" />
                <Input
                    variant="primary"
                    title="imie"
                    name="firstName"
                    type="text"
                    placeholder="podaj imię"
                    handleChange={handleSetUser}
                />
                <Input
                    variant="primary"
                    title="nazwisko"
                    name="lastName"
                    type="text"
                    placeholder="podaj nazwisko"
                    handleChange={handleSetUser}
                />
                <Input
                    variant="primary"
                    title="telefon"
                    name="phoneNumber"
                    type="text"
                    placeholder="podaj numer telefonu"
                    handleChange={handleSetUser}
                />
                <Button variant="primary">Dodaj</Button>
            </form>
        </Wrapper >
    );
}

export default AddClient;