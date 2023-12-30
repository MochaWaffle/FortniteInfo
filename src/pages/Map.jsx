import {useEffect, useState} from 'react';

export default function Map() {
    const [mapLink, setMapLink] = useState('');

    function getMap() {
        fetch("https://fortnite-api.com/v1/map")
        .then((response) => response.json())
        .then((data) => setMapLink(data.data.images.pois));
    }
    
    useEffect(() => {getMap()}, []);

    return (
        <>
            <div className="containerResize">
                <h1>Map</h1>
                <div className="mapContainer">
                    <a href={mapLink} target="_blank"><img src={mapLink} alt="Image could not load. Image was: Current Fortnite POIS Map."></img></a>
                </div>
                <p> Click <a href={mapLink} target="_blank">image</a> to enlarge it.</p>
            </div>
        </>
    )
}