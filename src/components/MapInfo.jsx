export default function MapInfo({ mapType, mapLink, error }) {
    return (
        <>
            <h1 style={{color: 'black'}}>{mapType}</h1>

            {!error && mapLink.length == 0 &&
                <p> Currently no {mapType.toLowerCase()} in API.</p>
            }

            {error &&
                <p className="errorText"> {error}</p>
            }
            {!error && mapLink.length > 0 &&
                <>
                    <div className="mapContainer">
                        <a href={mapLink} target="_blank"><img src={mapLink} alt={`Current Fortnite ${mapType} image could not load.`}></img></a>
                    </div>
                    <p> Click <a href={mapLink} target="_blank">image</a> to enlarge it.</p>
                </>
            }
        </>
    )
}