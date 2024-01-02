export default function NewsInfo({newsTitle, newsText, newsImage, newsType}) {
    return (
        <>
            <h1>{newsType} News</h1>
                {newsTitle.length > 0 && newsTitle !== "Error" &&
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
                
                {newsTitle == "Error" &&
                    <p className="errorText"> Error fetching news data in API.</p>
                }

                {newsTitle.length == 0 &&
                    <p> Currently no {newsType} news.</p>
                }
        </>
    )
}