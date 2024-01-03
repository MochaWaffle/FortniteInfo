export default function NewsInfo({newsTitle, newsText, newsImage, newsType, error}) {
    return (
        <>
            <h1>{newsType} News</h1>
                {!error && newsTitle.length > 0 &&
                    <>
                        <h1 className="newsTitle"> {newsTitle} </h1>
                    
                        <div className = "newsContainer">
                            <div className="newsText">
                                <p><i>{newsText}</i></p>
                            </div>
                            
                            <a href={newsImage} target="_blank"><img src={newsImage} alt="Image could not load. Image was: Current Fortnite News Image."></img></a>
                            <div className="newsText">
                                <p>Click <a href={newsImage} target="_blank">image</a> to enlarge it.</p>
                            </div>
                        </div>
                    </>
                }
                
                {error &&
                    <p className="errorText"> Error: {error.toString()}</p>
                }

                {!error && newsTitle.length == 0 &&
                    <p> Currently no {newsType} news.</p>
                }
        </>
    )
}