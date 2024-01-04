import React from 'react'
import NewsInfo from '../components/NewsInfo'
const MemoizedNewsInfo = React.memo(NewsInfo)

export default function BrNews({newsData, error}) {
    return (
        <>
        {newsData?.br?.motds?.map((news, index) =>
            <React.Fragment key={news?.id ?? index}>
                <MemoizedNewsInfo 
                    newsTitle = {news?.title || ''}
                    newsText = {news?.body || ''}
                    newsImage = {news?.image || ''}
                    newsType = 'Battle Royale'
                    error = {error}
                />
            </React.Fragment>
            
            ) ??
                <MemoizedNewsInfo
                    newsTitle = ''
                    newsText = ''
                    newsImage = ''
                    newsType = 'Battle Royale'
                    error = {error} 
                />
        }
        </>
    )
    
}