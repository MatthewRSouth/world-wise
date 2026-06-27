import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

function Map() {
    //returns a funnction called navigate to move to any url
    const navigate = useNavigate();
    //Storing the data in the URL makes it accessible throughout (global)
    //First need ot make query string
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');
    return (
        <div
            className={styles.mapContainer}
            onClick={() => {
                navigate('form');
            }}
        >
            <h1>Map</h1>{' '}
            <h1>
                Position: {lat}, {lng}
            </h1>
            <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
                Change Pos
            </button>
        </div>
    );
}

export default Map;
