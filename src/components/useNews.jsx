import {useEffect, useState} from 'react'

export default function useNews() {
    const[newsData, setNewsData] = useState({
      br: { motds: [{ title: '', body: '', image: ''}]} ,
      stw: {messages: [{ title: '', body: '', image: ''}]},
      creative: {motds: [{ title: '', body: '', image: ''}]}
    });
    const[error, setError] = useState(null);

    useEffect(() => {
        async function fetchNews() {
          try {
            const response = await fetch('https://fortnite-api.com/v2/news');
            const data = await response.json();
            
            setNewsData(data.data);
          } catch (error) {
            console.log("Error fetching news API data.")
            setError(error)
          }
        }
     
        fetchNews();
      }, []);
     
    return [newsData, error];
}