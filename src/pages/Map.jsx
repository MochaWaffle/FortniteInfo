import {useEffect, useState} from 'react';
import MapInfo from '../components/MapInfo';

export default function Map() {
    const [mapWithPoisLink, setMapWithPoisLink] = useState('');
    const [mapWithoutPoisLink, setMapWithoutPoisLink] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getMap() {
            setError(null)
            try {
                const response = await fetch("https://fortnite-api.com/v1/map")
                const data = await response.json();
  
                setMapWithPoisLink(data?.data?.images?.pois || '')
                setMapWithoutPoisLink(data?.data?.images?.blank || '')
            } catch (error) {
                setError("An error occurred while retrieving the map data.")
            }
        }

        getMap();
    }, []);

    return (
        <>
            <div className="containerResize">
                <MapInfo 
                    mapType = "Map With POIS"
                    mapLink = {mapWithPoisLink}
                    error = {error}
                />
                <br />

                <MapInfo 
                    mapType = "Map Without POIS"
                    mapLink = {mapWithoutPoisLink}
                    error = {error}
                />
            </div>
        </>
    )
}