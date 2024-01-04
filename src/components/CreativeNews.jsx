import React from 'react'
import NewsInfo from '../components/NewsInfo'
const MemoizedNewsInfo = React.memo(NewsInfo)

export default function CreativeNews({newsData, error}) {
    return (
        <>
        {newsData?.creative?.motds?.map((news, index) =>
                <React.Fragment key = {news?.id ?? index}>
                    <MemoizedNewsInfo
                        newsTitle = {news?.title || ''}
                        newsText = {news?.body || ''}
                        newsImage = {news?.image || ''}
                        newsType= 'Creative'
                        error = {error}
                    />
                </React.Fragment>
            ) ??
                <MemoizedNewsInfo
                    newsTitle = ''
                    newsText = ''
                    newsImage = ''
                    newsType = 'Creative'
                    error = {error}
                />
        }
        </>
    )
    
}