import AppNav from '../components/AppNav';
import PageNav from '../components/PageNav';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <PageNav />
            <AppNav></AppNav>
            <h1 className="test">worldwise</h1>

            <Link to="/app">Go to the App</Link>
        </div>
    );
}

export default Home;
