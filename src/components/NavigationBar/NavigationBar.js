import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCog, faPowerOff, faPlus } from "@fortawesome/free-solid-svg-icons";
import logo from '../../assets/logo.svg';
import Button from '../Button/Button';
import Image from '../Image/Image';
import Input from '../Input/Input';
import './Navigation.scss';

const NavigationBar = ({ variant, showClientAddForm }) => {
    return (
        <>
            <Image variant={variant} src={logo} alt="logo" />
            <div className="navigation">
                <div>
                    <Input variant="secondary" placeholder="szukaj" type="text" />
                    <Button variant="tertiary">
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </div>
                <div>
                    <Button variant="secondary">
                        <FontAwesomeIcon icon={faUserCog} />
                    </Button>
                    <Button variant="secondary">
                        <FontAwesomeIcon icon={faPowerOff} />
                    </Button>
                    <Button
                        variant="secondary"
                        children="Dodaj klienta"
                        handleClick={showClientAddForm}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </div>
            </div>
        </>
    );
}

export default NavigationBar
    ;