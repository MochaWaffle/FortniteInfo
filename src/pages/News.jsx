import NewsInfo from '../components/NewsInfo';
import useNews from '../components/useNews';

export default function News() {
    const data = useNews();

    const newsData = data[0];
    const error = data[1];

    return (
        <>
            <div className="containerResize">
                <NewsInfo 
                    newsTitle = {newsData?.br?.motds[0]?.title || ''}
                    newsText = {newsData?.br?.motds[0]?.body || ''}
                    newsImage = {newsData?.br?.motds[0]?.image || ''}
                    newsType = 'Battle Royale'
                    error = {error}
                />
                <br />
                <br />
                <NewsInfo
                    newsTitle = {newsData?.stw?.messages[0]?.title || ''}
                    newsText = {newsData?.stw?.messages[0]?.body || ''}
                    newsImage = {newsData?.stw?.messages[0]?.image || ''}
                    newsType = 'Save The World'
                    error = {error}
                />
                <br />
                <br />
                <NewsInfo
                    newsTitle = {newsData?.creative?.motds[0]?.title || ''}
                    newsText = {newsData?.creative?.motds[0]?.body || ''}
                    newsImage = {newsData?.creative?.motds[0]?.image || ''}
                    newsType= 'Creative'
                    error = {error}
                />
            </div>
        </>
    )
}