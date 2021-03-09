import Input from '../../Input/Input';
import Button from '../../Button/Button';
import Wrapper from '../../shared/Wrapper/Wrapper';
import './AddClient.scss';

const AddClient = () => {
    return (
        <Wrapper variant="login">
            <div className="form--primary">
                <Input
                    variant="primary"
                    title="imie"
                    name="imie"
                    type="text"
                    placeholder="podaj imię"
                />
                <Input
                    variant="primary"
                    title="nazwisko"
                    name="nazwisko"
                    type="text"
                    placeholder="podaj nazwisko"
                />
                <Input
                    variant="primary"
                    title="telefon"
                    name="telefon"
                    type="text"
                    placeholder="podaj numer telefonu"
                />
                <Button variant="primary" />
            </div>
        </Wrapper >
    );
}

export default AddClient;