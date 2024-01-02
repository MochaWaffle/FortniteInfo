import NewsInfo from '../components/NewsInfo';
import useNews from '../components/useNews';

export default function News() {
    const newsData = useNews();

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