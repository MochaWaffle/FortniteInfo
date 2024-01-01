import {useState} from 'react';

export default function CreatorCode() {
    const[code, setCode] = useState("");
    const[isValid, setIsValid] = useState("");

    function isCodeValid() {
        if (code.trim().length > 0) {
            fetch('https://fortnite-api.com/v2/creatorcode?name=' + code)
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
        } else {
            setIsValid("");
        }
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        isCodeValid();
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    }
    return (
        <>
            <div className="parentCodeContainer">
                <div className="codeContainer">
                    <h1 className="createrCodeTitle">Creater Code Validator</h1>
                    <input className="codeInput" type="text" onChange = {(e) => setCode(e.target.value)} onKeyDown={handleKeyPress} placeholder="Enter Code" />
                    <button className="codeSubmit" onClick= {handleSubmit}>Submit</button>
                    <br />
                    <br />
                    {isValid !== "" &&
                        <p className = {isValid}>{isValid} Creator Code.</p>                
                    }
                </div>
            </div>
        </>
    )
}