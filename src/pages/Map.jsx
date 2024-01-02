import {useEffect, useState} from 'react';
import MapInfo from '../components/MapInfo';

export default function Map() {
    const [mapWithPoisLink, setMapWithPoisLink] = useState('');
    const [mapWithoutPoisLink, setMapWithoutPoisLink] = useState('');
    
    useEffect(() => {
        async function getMap() {
            try {
                const response = await fetch("https://fortnite-api.com/v1/map")
                const data = await response.json()

                setMapWithPoisLink(data?.data?.images?.pois || '')
                setMapWithoutPoisLink(data?.data?.images?.blank || '')
            } catch (error) {
                setMapWithPoisLink('Error')
                setMapWithoutPoisLink('Error')
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
                />
                <br />

                <MapInfo 
                    mapType = "Map Without POIS"
                    mapLink = {mapWithoutPoisLink}
                />
            </div>
        </>
    )
}