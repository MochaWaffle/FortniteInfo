import {useEffect, useState} from 'react';

export default function Map() {
    function getMap() {
        fetch("https://fortnite-api.com/v1/map")
        .then((response) => response.json())
        .then((data) => setMapLink(data.data.images.pois));
    }
    const [mapLink, setMapLink] = useState('');

    useEffect(() => {getMap()}, []);

    return (
        <>
            <h1>Map</h1>
            <div className="imageContainer">
                <a href={mapLink} target="_blank"><img src={mapLink} alt="Current Fortnite POIS Map"></img></a>
            </div>
        </>
    )
}