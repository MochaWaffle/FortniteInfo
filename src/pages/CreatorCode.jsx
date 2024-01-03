import {useState} from 'react';

export default function CreatorCode() {
    const[code, setCode] = useState("");
    const[isValid, setIsValid] = useState("");
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(false);

   async function isCodeValid() {
    setError(null)
        if (code.trim().length > 0) {
            try {
                setLoading(true)

                const response = await fetch('https://fortnite-api.com/v2/creatorcode?name=' + code)
                const data = await response.json();
                
                if (data?.data?.status === "ACTIVE") {
                    setIsValid("Valid");
                } else {
                    setIsValid("Invalid");
                }
                setLoading(false)
            } catch (error) {
                setError("An error occurred while checking the creator code.")
                setLoading(false)
            }
        } else {
            setError("Please enter a creator code.")
            setLoading(false)
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
                    <div className="codeText">
                        {!error && isValid !== "" && !loading &&
                            <p className = {isValid}>{isValid} Creator Code.</p>                
                        }

                        {!error && isValid !== "" && loading &&
                            <p>Checking validity of the creator code...</p>
                        }
                        {error &&
                            <p className="errorText">{error}</p>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}