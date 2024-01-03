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
                {/* <h1 className="newsTitle" style={{boxShadow: '0 4px 8px 0 rgba(255, 2, 2, 0.764), 0 6px 20px 0 rgba(255, 0, 0, 0.75)'}}
                >Battle Royale News</h1> */}
                <h1 className="newsTitle" style={{backgroundColor: 'red'}}
                >Battle Royale News</h1>
                <br />
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
                {/* <br /> */}
                <br />
                {/* <h1 className="newsTitle" style={{boxShadow: '0 4px 8px 0 rgba(221, 2, 255, 0.764), 0 6px 20px 0 rgba(221, 2, 255, 0.764'}}
                >Save The World News</h1> */}
                <h1 className="newsTitle" style={{backgroundColor: 'purple'}}
                >Save The World News</h1>
                <br />
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
                {/* <br /> */}
                <br />
                {/* <h1 className="newsTitle" style={{boxShadow: '0 4px 8px 0 rgba(2, 255, 78, 0.764), 0 6px 20px 0 rgba(2, 255, 78, 0.764)'}}
                >Creative News</h1> */}
                <h1 className="newsTitle" style={{backgroundColor: 'green'}}
                >Creative News</h1>
                <br />
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