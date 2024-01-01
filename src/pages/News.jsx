import {useEffect, useState} from 'react';

export default function News() {
    const[brNewsTitle, setBrNewsTitle] = useState('');
    const[brNewsImage, setBrNewsImage] = useState('');
    const[brNewsText, setBrNewsText] = useState('');

    const[stwNewsTitle, setStwNewsTitle] = useState('');
    const[stwNewsImage, setStwNewsImage] = useState('');
    const[stwNewsText, setStwNewsText] = useState('');

    const[creativeNewsTitle, setCreativeNewsTitle] = useState('');
    const[creativeNewsImage, setCreativeNewsImage] = useState('');
    const[creativeNewsText, setCreativeNewsText] = useState('');

    useEffect(() => {
        async function getBrNews() {
            try {
                const response = await fetch('https://fortnite-api.com/v2/news');

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();

                if (data && data.data && data.data.br && data.data.br.motds && data.data.br.motds.length > 0) {
                    setBrNewsTitle(data.data.br.motds[0].title);
                    setBrNewsImage(data.data.br.motds[0].image);
                    setBrNewsText(data.data.br.motds[0].body);
                } else {
                    setBrNewsTitle('');
                    setBrNewsImage('');
                    setBrNewsText('');
                }

            } catch (error) {
                setBrNewsTitle("Error");
            }
        }

        async function getStwNews() {
            try {
                const response = await fetch('https://fortnite-api.com/v2/news');

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();

                if (data && data.data && data.data.stw && data.data.stw.messages && data.data.stw.messages.length > 0) {
                    setStwNewsTitle(data.data.stw.messages[0].title);
                    setStwNewsImage(data.data.stw.messages[0].image);
                    setStwNewsText(data.data.stw.messages[0].body);
                } else {
                    setStwNewsTitle('');
                    setStwNewsImage('');
                    setStwNewsText('');
                }
            } catch (error) {
                setStwNewsTitle("Error");
            }
        }

        async function getCreativeNews() {
            try {
                const response = await fetch('https://fortnite-api.com/v2/news');

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();

                if (data && data.data && data.data.creative && data.data.creative.motds && data.data.creative.motds.length > 0) {
                    setCreativeNewsTitle(data.data.creative.motds[0].title);
                    setCreativeNewsImage(data.data.creative.motds[0].image);
                    setCreativeNewsText(data.data.creative.motds[0].body);
                } else {
                    setCreativeNewsTitle('');
                    setCreativeNewsImage('');
                    setCreativeNewsText('');
                }
            } catch (error) {
                setCreativeNewsTitle("Error")
            }
        }
        getBrNews();
        getStwNews();
        getCreativeNews();
    }, []);

    return (
        <>
            <div className="containerResize">
                <h1 className="newsTitle">Battle Royale News</h1>
                {brNewsTitle.length > 0 && brNewsTitle !== "Error" &&
                    <>
                        <h2> {brNewsTitle} </h2>
                    
                        <div className = "newsContainer">
                            <div className="newsText">
                                <p><i>{brNewsText}</i></p>
                            </div>
                            
                            <a href={brNewsImage} target="_blank"><img src={brNewsImage} alt="Image could not load. Image was: Current Fortnite News Image."></img></a>
                            <div className="newsText">
                                <p>Click <a href={brNewsImage} target="_blank">image</a> to enlarge it.</p>
                            </div>
                        </div>
                    </>
                }
                
                {brNewsTitle == "Error" &&
                    <h2> Error fetching battle royale news data.</h2>
                }

                {brNewsTitle.length == 0 &&
                    <h2> Currently no battle royale news.</h2>
                }
                <br />
                <br />
                <h1 className="newsTitle">Save The World News</h1>
                {stwNewsTitle.length > 0 && stwNewsTitle !== "Error" &&
                    <>
                        <h2> {stwNewsTitle} </h2>
                    
                        <div className = "newsContainer">
                            <div className="newsText">
                                <p><i>{stwNewsText}</i></p>
                            </div>
                            
                            <a href={stwNewsImage} target="_blank"><img src={stwNewsImage} alt="Image could not load. Image was: Current Fortnite News Image."></img></a>
                            <div className="newsText">
                                <p>Click <a href={stwNewsImage} target="_blank">image</a> to enlarge it.</p>
                            </div>
                        </div>
                    </>
                }
                
                {stwNewsTitle == "Error" &&
                    <h2> Error fetching save the world news data.</h2>
                }

                {stwNewsTitle.length == 0 &&
                    <h2> Currently no save the world news.</h2>
                }

                <br />
                <br />
                <h1 className="newsTitle">Creative News</h1>
                {creativeNewsTitle.length > 0 && creativeNewsTitle !== "Error" &&
                    <>
                        <h2> {creativeNewsTitle} </h2>
                    
                        <div className = "newsContainer">
                            <div className="newsText">
                                <p><i>{creativeNewsText}</i></p>
                            </div>
                            
                            <a href={creativeNewsImage} target="_blank"><img src={creativeNewsImage} alt="Image could not load. Image was: Current Fortnite News Image."></img></a>
                            <div className="newsText">
                                <p>Click <a href={creativeNewsImage} target="_blank">image</a> to enlarge it.</p>
                            </div>
                        </div>
                    </>
                }
                
                {creativeNewsTitle == "Error" &&
                    <h2> Error fetching creative news data.</h2>
                }

                {creativeNewsTitle.length == 0 &&
                    <h2> Currently no creative news.</h2>
                }
            </div>
        </>
    )

    
}