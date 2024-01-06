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
          setError(null)
          try {
            const response = await fetch('https://fortnite-api.com/v2/news');
            const data = await response.json();
            
            setNewsData(data.data);
          } catch (error) {
            setError("An error occurred while retrieving the news data.")
          }
        }
     
        fetchNews();
      }, []);
     
    return [newsData, error];
}