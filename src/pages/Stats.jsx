import {useEffect, useState} from 'react'
import axios from 'axios'

export default function Stats() {
    const[platform, setPlatform] = useState("PC");
    const[playerName, setPlayerName] = useState("");
    const[playerData, setPlayerData] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'http://localhost:8000'
        }

        axios.request(options).then((response) => {
            console.log(response.data)
            setPlayerData(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }, [])

    console.log(playerData);

    const handleChange = (event) => {
        setPlatform(event.target.value)
    }

    function getPlayerData() {
        fetch('https://fortnite-api.com/v2/stats/br/v2?name=' + playerName)
            .then((response) => response.json())
            .then((data) => {    
                if (data.status === 404) {
                    setIsValid("Invalid");
                } else if (data.status === 200) {
                    if (data.data.status === "ACTIVE") {
                        setIsValid("Valid");
                    } else {
                        setIsValid("Invalid");
                    }
                }
            });
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
                    <option value="PC">PC</option>
                    <option value="Xbox">Xbox</option>
                    <option value="Playstation">Playstation</option>
                </select>
                <button onClick = {handleSubmit}>Submit</button>
            </form>
        </>
    )
}