import '../CSS/Home.css'

function Home() {
    return (
        <>
        <div className="parentHomeContainer">
            <div className="homeContainer">
                <h1 className="homeTitle">Welcome!</h1>
                <p className="homeBodyText">This website uses the API: <a href="https://fortnite-api.com/">https://fortnite-api.com/</a></p>
            </div>
        </div>

        <footer>
            <div className="parentFooterText">
                <div className="footerText">
                    <p> Made by: <a href="https://github.com/MochaWaffle">MochaWaffle</a> on GitHub</p>
                </div> 
            </div>
        </footer>
        </>
    )
}

export default Home