import Fortnite_Wallpaper from '../Images/Fortnite_Wallpaper.jpg'

function Home() {
    return (
        <>
        {/* <div className="backgroundContainer">
            <h1 className="title">Welcome</h1>
        </div> */}
            
            
        {/* <img className="backgroundImage" src={Fortnite_Wallpaper}/> */}
        <div className="parentHomeContainer">
            <div className="homeContainer">
                <h1 className="homeTitle">Welcome!</h1>
                <p className="homeBodyText">This website uses the API: <a href="https://fortnite-api.com/">https://fortnite-api.com/</a></p>
            </div>
        </div>
        </>
    )
}

export default Home