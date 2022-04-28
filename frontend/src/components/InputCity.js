import React, { useState } from "react";
import { useParams } from "react-router-dom";

const InputCity = () => {

    const [city, setCity] = useState("");
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);

    const country_id = useParams().id;

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {

            const body = { city, country_id, longitude, latitude }
            const response = await fetch("http://localhost:8000/api/add/city", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            // Refresh screen
            window.location = `/continents/countries/${country_id}/cities`;
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div>
            <h1 className="text-center mt-5">Linnad</h1>
            <h4 className="text-left mt-5">Lisa linn</h4>

            <h6 className="text-left mt-2">Linn</h6>
            <form className="mt-2">
                <input
                    type="text"
                    className="form-control"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
            </form>

            <h6 className="text-left mt-2">Laiuskraad</h6>
            <form className="mt-2">
                <input
                    type="text"
                    className="form-control"
                    value={latitude}
                    onChange={e => setLatitude(e.target.value)}
                />
            </form>

            <h6 className="text-left mt-2">Pikkuskraad</h6>
            <form className="d-flex mt-2" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={longitude}
                    onChange={e => setLongitude(e.target.value)}
                />
                <button className="btn btn-success">Lisa</button>
            </form>
        </div>
    )
}


export default InputCity;