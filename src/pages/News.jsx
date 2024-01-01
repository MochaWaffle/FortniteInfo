import {useEffect, useState} from 'react';
import NewsInfo from '../components/NewsInfo';
import useNews from '../components/useNews';

export default function News() {
    // const[brNewsTitle, setBrNewsTitle] = useState('');
    // const[brNewsImage, setBrNewsImage] = useState('');
    // const[brNewsText, setBrNewsText] = useState('');

    // const[stwNewsTitle, setStwNewsTitle] = useState('');
    // const[stwNewsImage, setStwNewsImage] = useState('');
    // const[stwNewsText, setStwNewsText] = useState('');

    // const[creativeNewsTitle, setCreativeNewsTitle] = useState('');
    // const[creativeNewsImage, setCreativeNewsImage] = useState('');
    // const[creativeNewsText, setCreativeNewsText] = useState('');

    const newsData = useNews();

    // useEffect(() => {
    //     async function getNews() {
    //         try {
    //             const response = await fetch('https://fortnite-api.com/v2/news');

    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch data');
    //             } else {
    //                 const data = await response.json();

    //                 if (data && data.data && data.data.br && data.data.br.motds && data.data.br.motds.length > 0) {
    //                     setBrNewsTitle(data.data.br.motds[0].title);
    //                     setBrNewsImage(data.data.br.motds[0].image);
    //                     setBrNewsText(data.data.br.motds[0].body);
    //                 } 

    //                 if (data && data.data && data.data.stw && data.data.stw.messages && data.data.stw.messages.length > 0) {
    //                     setStwNewsTitle(data.data.stw.messages[0].title);
    //                     setStwNewsImage(data.data.stw.messages[0].image);
    //                     setStwNewsText(data.data.stw.messages[0].body);
    //                 }

    //                 if (data && data.data && data.data.creative && data.data.creative.messages && data.data.creative.messages.length > 0) {
    //                     setCreativeNewsTitle(data.data.creative.messages[0].title);
    //                     setCreativeNewsImage(data.data.creative.messages[0].image);
    //                     setCreativeNewsText(data.data.creative.messages[0].body);
    //                 }
    //             }
    //         } catch (error) {
    //             setBrNewsTitle('Error')
    //             setStwNewsTitle('Error')
    //             setCreativeNewsTitle('Error')
    //         }
    //     }

    //     getNews();
    // }, []);

    return (
        <>
            <div className="containerResize">
                <NewsInfo 
                    newsTitle = {newsData?.data?.br?.motds[0]?.title || ''}
                    newsText = {newsData?.data?.br?.motds[0].body || ''}
                    newsImage = {newsData?.data?.br?.motds[0].image || ''}
                    newsType = 'Battle Royale'
                />
                <br />
                <br />
                <NewsInfo
                    newsTitle = {newsData?.data?.stw?.messages[0]?.title || ''}
                    newsText = {newsData?.data?.stw?.messages[0]?.body || ''}
                    newsImage = {newsData?.data?.stw?.messages[0]?.image || ''}
                    newsType = 'Save The World'
                />
                <br />
                <br />
                <NewsInfo
                    newsTitle = {newsData?.data?.creative?.motds[0]?.title || ''}
                    newsText = {newsData?.data?.creative?.motds[0]?.body || ''}
                    newsImage = {newsData?.data?.creative?.motds[0]?.image || ''}
                    newsType= 'Creative'
                />
            </div>
        </>
    )
}