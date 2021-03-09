import Header from '../Header/Header';

const Card = () => {
    return (
        <div>
            <Header
                title="WIZYTY"
                variant="Primary"
            />
            <div>
                <ul>
                    <li>15.02.2021 konsultacja</li>
                    <li>14.02.2021 konsultacja </li>
                    <li>15.03.2021 konsultacja</li>
                </ul>
            </div>
        </div>
    );
}

export default Card;