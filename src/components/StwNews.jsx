import React from 'react'
import NewsInfo from '../components/NewsInfo'
const MemoizedNewsInfo = React.memo(NewsInfo)

export default function StwNews({newsData, error}) {
    return (
        <>
        {newsData?.stw?.messages?.map((news, index) =>
                <React.Fragment key = {news?.id ?? index}>
                    <MemoizedNewsInfo
                        newsTitle = {news?.title || ''}
                        newsText = {news?.body || ''}
                        newsImage = {news?.image || ''}
                        newsType = 'Save The World'
                        error = {error}
                    />
                </React.Fragment>
            ) ??
                <MemoizedNewsInfo 
                    newsTitle = ''
                    newsText = ''
                    newsImage = ''
                    newsType = 'Save The World'
                    error = {error}
                />
        }
        </>
    )
    
}