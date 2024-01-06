import useNews from '../components/useNews';
import React, {Suspense} from 'react';
import '../CSS/News.css'

const BrNews = React.lazy(() => import('../components/BrNews'))
const StwNews = React.lazy(() => import('../components/StwNews'))
const CreativeNews = React.lazy(() => import ('../components/CreativeNews'))

export default function News() {
    const data = useNews();
    const newsData = data[0];
    const error = data[1];
    
    return (
        <>
            <div className="containerResize">
                <h1 className="newsTitle" style={{backgroundColor: 'red'}}
                >Battle Royale News</h1>
                <br />
                <Suspense fallback={
                    <div className="parentHomeContainer">
                        <div className="homeContainer">
                            <p className="homeBodyText">Loading...</p>
                        </div>
                    </div>
                }>
                    <BrNews newsData = {newsData} error={error}/>
                </Suspense>
                <br />

                <h1 className="newsTitle" style={{backgroundColor: 'purple'}}
                >Save The World News</h1>
                <br />
                <Suspense fallback={
                    <div className="parentHomeContainer">
                        <div className="homeContainer">
                            <p className="homeBodyText">Loading...</p>
                        </div>
                    </div>
                }>
                    <StwNews newsData = {newsData} error={error}/>
                </Suspense>
                <br />
                <h1 className="newsTitle" style={{backgroundColor: 'green'}}
                >Creative News</h1>
                <br />
                <Suspense fallback={
                    <div className="parentHomeContainer">
                        <div className="homeContainer">
                            <p className="homeBodyText">Loading...</p>
                        </div>
                    </div>
                }>
                    <CreativeNews newsData = {newsData} error={error}/>
                </Suspense>
                
            </div>
        </>
    )
}