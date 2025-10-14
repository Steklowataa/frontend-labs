import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { data } from "../data/module-data";


export default function Lab2() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [searchId, setSearchId] = useState("");
    const [hasSearched, setHasSearched] = useState(false)


    const handleSearch = () => {
        setHasSearched(true)
        if(searchId.trim() !== "") {
            navigate(`/lab2/${searchId.trim()}`);
            setSearchId("")
        } else {
            navigate("/lab2");
        }
    }

    const person = id ? data.find(person => person.id.toString() === id) : null;

    return (
        <div style={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
            <h1>Wyszukaj osobe po ID:</h1>
            <div>
                <input type="text" placeholder="Podaj ID" style={{width: "300px", height: "20px", borderRadius: "20px", borderWidth: "2px", borderColor: "black", padding: "10px"}}
                    value={searchId} 
                    onChange={(e) => setSearchId(e.target.value)}/>
                        <button 
                            style={{width: "100px", height: "45px", backgroundColor: "black", color: "white", borderRadius: "30px", cursor: "pointer"}}
                            onClick={handleSearch}>
                            Wyszukaj
                        </button>
            </div>
            {hasSearched &&!id && <p>Brak identyfikatora osoby.</p>}

            {id && !person && <p>Nie znaleziono osoby o tym identyfikatorze.</p>}
            <div style={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", marginTop: "20px"}}>
                {person && (
                    <div style={{width: "200px", height: "50px", borderRadius: "20px", borderWidth: "3px", borderColor: "black", padding: "20px", borderStyle: "solid", backgroundColor: "#404040", color: "whie"}}>
                        <div style={{color: "white"}}><strong>Wiek: </strong>{person.age}</div>
                        <div style={{color: "white"}}><strong>Imię:</strong> {person.firstName}</div>
                        <div style={{color: "white"}}><strong>Nazwisko:</strong>{person.lastName}</div>
                    </div>
                )}
            </div>
        </div>
    )
}