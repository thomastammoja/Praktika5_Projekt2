import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// City input component
import InputCity from "../components/InputCity";

const ListCities = () => {

    const [cities, setCities] = useState([]);
    const id = useParams().id;

    const getCities = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/continents/countries/${id}/cities`);
            const jsonData = await response.json();
            setCities(jsonData);

            //console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }
    // useEffect makes a fetch request every time this component is rendered
    useEffect(() => {
        getCities();
    }, []);

    //console.log(cities);
    return (
        <div className="container mt-5">
            <InputCity />
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Linn</th>
                        <th>Laiuskraad</th>
                        <th>Pikkuskraad</th>
                    </tr>
                </thead>
                <tbody>
                    {cities.map(s => (
                        <tr key={s.id}>
                            <td>{s.city}</td>
                            <td>{s.latitude}</td>
                            <td>{s.longitude}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default ListCities;