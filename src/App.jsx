import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//File Imports
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';

//Server Base URL
const BASE_URL = `http://localhost:9000`;

function App() {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(function () {
        //Fetches Cities list from our Cities API
        async function fetchCities() {
            try {
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setCities(data);
            } catch {
                alert(`There was an error loading data...`);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCities();
    }, []);

    //////////////Dynamic Routes with URL parameters
    // create route, linnkned to the city componnet  <Route path="cities/:id" element={<City />}></Route>
    //link to the url (route) <Link className={styles.cityItem} to={`${id}`}>
    //Read data into url: const { id } = useParams();
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage></Homepage>}></Route>
                <Route path="product" element={<Product />}></Route>
                <Route path="pricing" element={<Pricing />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="app" element={<AppLayout />}>
                    <Route
                        index
                        element={<Navigate replace to="cities" />}
                    ></Route>
                    <Route
                        path="cities"
                        element={
                            <CityList cities={cities} isLoading={isLoading} />
                        }
                    ></Route>
                    <Route path="cities/:id" element={<City />}></Route>
                    <Route
                        path="countries"
                        element={
                            <CountryList
                                cities={cities}
                                isLoading={isLoading}
                            />
                        }
                    ></Route>
                    <Route path="form" element={<Form />}></Route>
                </Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
