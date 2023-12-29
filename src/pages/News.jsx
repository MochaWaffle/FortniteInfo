import {useEffect, useState} from 'react';

export default function News() {
    const[newsTitle, setNewsTitle] = useState('');
    const[newsImage, setNewsImage] = useState('');
    const[newsText, setNewsText] = useState('');

    useEffect(() => {
        async function getNews() {
            try {
                const response = await fetch('https://fortnite-api.com/v2/news');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();

                if (data && data.data && data.data.br && data.data.br.motds && data.data.br.motds.length > 0) {
                    setNewsTitle(data.data.br.motds[0].title || 'Currently no news title.');
                    setNewsImage(data.data.br.motds[0].image || '');
                    setNewsText(data.data.br.motds[0].body || 'Currently no news text.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setNewsTitle("Error fetching news title data");
                setNewsText("Error fetching news text data");
            }
        }

        getNews();
    }, []);
  
    return (
        <>
            <h1> {newsTitle} </h1>
            
            <div className = "imageContainer">
                <div className="newsText">
                    <p><i>{newsText}</i></p>
                </div>
                
                <a href={newsImage} target="_blank"><img src={newsImage} alt="Image could not load. Image was: Current Fortnite News Image"></img></a>
            </div>
            
        </>
    )

    
}