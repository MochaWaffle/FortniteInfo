import {useEffect, useState} from 'react';

export default function News() {
    function getNews() {
        fetch('https://fortnite-api.com/v2/news')
        .then((response) => response.json())
        .then((data) => {
            setNews(data),
            setNewsTitle(data.data.br.motds[0].title),
            setNewsImage(data.data.br.motds[0].image),
            setNewsText(data.data.br.motds[0].body)
        });
    }
    const[news, setNews] = useState([]);
    const[newsTitle, setNewsTitle] = useState('');
    const[newsImage, setNewsImage] = useState('');
    const[newsText, setNewsText] = useState('');
    useEffect(() => {getNews()},[]);
    console.log(news);
    console.log("News Title:" + newsTitle);
    console.log("News Image Link: " + newsImage);
    return (
        <>
            <h1> {newsTitle} </h1>
            <p>"{newsText}"</p>
            <div className = "mapContainer">
                <a href={newsImage} target="_blank"><img src={newsImage} className="mapImage" alt="Current Fortnite News Image"></img></a>
            </div>
            
        </>
    )

    
}