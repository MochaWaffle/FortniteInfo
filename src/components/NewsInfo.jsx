export default function NewsInfo({newsTitle, newsText, newsImage, newsType}) {
    return (
        <>
            <h1 className="newsTitle">{newsType} News</h1>
                {newsTitle.length > 0 && newsTitle !== "Error" &&
                    <>
                        <h2> {newsTitle} </h2>
                    
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
                    <h2> Error fetching {newsType} news data.</h2>
                }

                {newsTitle.length == 0 &&
                    <h2> Currently no {newsType} news.</h2>
                }
        </>
    )
}