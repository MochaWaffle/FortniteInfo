import NewsInfo from '../components/NewsInfo';
import useNews from '../components/useNews';
import React from 'react';

export default function News() {
    const data = useNews();
    const newsData = data[0];
    const error = data[1];
    
    return (
        <>
            <div className="containerResize">
                <h1>Battle Royale News</h1>

                {newsData?.br?.motds?.map((news, index) =>
                    <React.Fragment key={news?.id ?? index}>
                        <NewsInfo 
                            newsTitle = {news?.title || ''}
                            newsText = {news?.body || ''}
                            newsImage = {news?.image || ''}
                            newsType = 'Battle Royale'
                            error = {error}
                        />
                    </React.Fragment>
                    
                ) ??
                    <NewsInfo
                        newsTitle = ''
                        newsText = ''
                        newsImage = ''
                        newsType = 'Battle Royale'
                        error = {error} 
                    />
                }
                <br />
                <br />
                <h1>Save The World News</h1>
                {newsData?.stw?.messages?.map((news, index) =>
                    <React.Fragment key = {news?.id ?? index}>
                        <NewsInfo
                            newsTitle = {news?.title || ''}
                            newsText = {news?.body || ''}
                            newsImage = {news?.image || ''}
                            newsType = 'Save The World'
                            error = {error}
                        />
                    </React.Fragment>
                ) ??
                    <NewsInfo 
                        newsTitle = ''
                        newsText = ''
                        newsImage = ''
                        newsType = 'Save The World'
                        error = {error}
                    />
                }
                <br />
                <br />
                <h1>Creative News</h1>
                {newsData?.creative?.motds?.map((news, index) =>
                    <React.Fragment key = {news?.id ?? index}>
                        <NewsInfo
                            newsTitle = {news?.title || ''}
                            newsText = {news?.body || ''}
                            newsImage = {news?.image || ''}
                            newsType= 'Creative'
                            error = {error}
                        />
                    </React.Fragment>
                ) ??
                    <NewsInfo
                        newsTitle = ''
                        newsText = ''
                        newsImage = ''
                        newsType = 'Creative'
                        error = {error}
                    />
                }
                
            </div>
        </>
    )
}