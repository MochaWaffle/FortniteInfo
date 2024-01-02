export default function MapInfo({mapType, mapLink}) {
    return (
        <>
            <h1>{mapType}</h1>

            {mapLink.length == 0 &&
                <p> Currently no {mapType.toLowerCase()} in API.</p>
            }

            {mapLink == 'Error' &&
                <p className="errorText"> Error fetching map data in API.</p>
            }
            {mapLink.length > 0 && mapLink !== 'Error' &&
                <>
                    <div className="mapContainer">
                        <a href={mapLink} target="_blank"><img src={mapLink} alt={`Image could not load. Image was: Current Fortnite ${mapType}.`}></img></a>
                    </div>
                    <p> Click <a href={mapLink} target="_blank">image</a> to enlarge it.</p>
                </>
            }
        </>
    )
}