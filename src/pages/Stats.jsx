import {useEffect, useState} from 'react'
import axios from 'axios'

export default function Stats() {
    const[platform, setPlatform] = useState("epic");
    const[playerName, setPlayerName] = useState("");
    const[playerData, setPlayerData] = useState([]);

    useEffect(() => {
        getPlayerData
    }, [])

    function getPlayerData() {
        const options = {
            method: 'GET',
            url: 'http://localhost:8000',
            params: {name: playerName, accountType: platform}
        }

        // axios.request(options).then((response) => {
        //     console.log(response.data)
        //     setPlayerData(response.data)
        // }).catch((error) => {
        //     console.error(error)
        // })
        fetch('https://fortnite-api.com/v2/creatorcode?name=' + code)
            .then((response) => response.json())
            .then((data) => {    
                if (data.status === 404) {
                    setPlayerData(["Account does not exist or has no stats"])
                } else if (data.status === 403) {
                    setPlayerData(["Account stats are private"])
                } else if (data.status === 400) {
                    setPlayerData(["Invalid or missing parameter(s)"])
                } else if (data.status === 200) {
                    setPlayerData(data)
                } else {
                    setPlayerData(["N/A"])
                }
            });

        console.log(playerData);
    }
    

    const handleChange = (event) => {
        setPlatform(event.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        getPlayerData();
    }
    return (
        <>
            <h1>Stats</h1>
            <form>
                <input type="text" onChange = {(e) => setPlayerName(e.target.value)} placeholder="Enter Player Name" />
                <select value={platform} onChange={handleChange}>
                    <option value="epic">Epic</option>
                    <option value="xbl">Xbox</option>
                    <option value="psn">Playstation</option>
                </select>
                <button onClick = {handleSubmit}>Submit</button>
            </form>
            {playerData.length !== 0 && <p>{playerData.status}</p>}
        </>
    )
}