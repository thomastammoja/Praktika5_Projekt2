import React, { Fragment, useState } from "react";

const InputCity = () => {

    const [city, setCity] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {

            const country_id = 256;
            const body = { city, country_id }
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
            <form className="d-flex mt-2" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
                <button className="btn btn-success">Lisa</button>
            </form>
        </div>



    )
}


export default InputCity;