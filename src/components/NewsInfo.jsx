export default function NewsInfo({newsTitle, newsText, newsImage, newsType, error}) {
    return (
        <>
                {!error && newsTitle.length > 0 &&
                    <>
                        
                    
                        <div className = "newsContainer">
                            <h2 style={{color: 'black'}}> {newsTitle} </h2>
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
                    <p className="errorText"> {error}</p>
                }

                {!error && newsTitle.length == 0 &&
                    <p> Currently no {newsType} news.</p>
                }

                <br />
                
        </>
    )
}