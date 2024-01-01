import {useEffect, useState} from 'react'

export default function useNews() {
    const[newsData, setNewsData] = useState([]);

    useEffect(() => {
        async function fetchNews() {
          try {
            const response = await fetch('https://fortnite-api.com/v2/news');
            const data = await response.json();
     
            setNewsData(data);
          } catch (error) {
            console.error('Failed to fetch data', error);
          }
        }
     
        fetchNews();
      }, []);
     
    return newsData;
}