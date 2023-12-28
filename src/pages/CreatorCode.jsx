
import {useState} from 'react';

export default function CreatorCode() {
    const[code, setCode] = useState("");
    const[isValid, setIsValid] = useState("");

    function isCodeValid() {
        if (code !== "") {
            fetch('https://fortnite-api.com/v2/creatorcode?name=' + code)
            .then((response) => response.json())
            .then((data) => {    
                if (data.status === 404) {
                    setIsValid("Invalid Code");
                } else if (data.status === 200) {
                    if (data.data.status === "ACTIVE") {
                        setIsValid("Valid Code");
                    } else {
                        setIsValid("Invalid Code");
                    }
                }
            });
        } else {
            setIsValid("");
        }
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        isCodeValid();
    }
    return (
        <>
            <h1>Creater Code Validator</h1>

            <input type="text" onChange = {(e) => setCode(e.target.value)} placeholder="Enter Code" />
            <button onClick= {handleSubmit}>Submit</button>

            {isValid !== '' &&
                <p>{isValid}</p>
            }
        </>
    )
}