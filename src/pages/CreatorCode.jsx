import {useState} from 'react';

export default function CreatorCode() {
    const[code, setCode] = useState("");
    const[isValid, setIsValid] = useState("");

   async function isCodeValid() {
        if (code.trim().length > 0) {
            try {
                const response = await fetch('https://fortnite-api.com/v2/creatorcode?name=' + code)
                const data = await response.json();
                
                if (data?.data?.status === "ACTIVE") {
                    setIsValid("Valid");
                } else {
                    setIsValid("Invalid");
                }
            } catch (error) {
                setIsValid('Error')
            }
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
                    <h1 className="creatorCodeTitle">Creator Code Validator</h1>
                    <input className="codeInput" type="text" onChange = {(e) => setCode(e.target.value)} onKeyDown={handleKeyPress} placeholder="Enter Code" />
                    <button className="codeSubmit" onClick= {handleSubmit}>Submit</button>
                    <br />
                    {/* <br /> */}
                    <div className="codeText">
                        {isValid !== "" && isValid !== "Error" &&
                            <p className = {isValid}>{isValid} Creator Code.</p>                
                        }

                        {isValid === "Error" &&
                            <p>Error fetching code data in API.</p>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}