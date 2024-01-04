import useNews from '../components/useNews';
import React, {Suspense} from 'react';

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
                <Suspense fallback={<p>Loading...</p>}>
                    <BrNews newsData = {newsData} error={error}/>
                </Suspense>
                <br />

                <h1 className="newsTitle" style={{backgroundColor: 'purple'}}
                >Save The World News</h1>
                <br />
                <Suspense fallback={<p>Loading...</p>}>
                    <StwNews newsData = {newsData} error={error}/>
                </Suspense>
                <br />
                <h1 className="newsTitle" style={{backgroundColor: 'green'}}
                >Creative News</h1>
                <br />
                <Suspense fallback={<p>Loading...</p>}>
                    <CreativeNews newsData = {newsData} error={error}/>
                </Suspense>
                
            </div>
        </>
    )
}