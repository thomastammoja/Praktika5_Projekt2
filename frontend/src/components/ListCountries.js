import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const ListCountries = () => {

    const [countries, setCountries] = useState([]);
    const id = useParams().id;

    const getCountries = async () => {
        try {

            const response = await fetch(`http://localhost:8000/api/continents/${id}/countries`);
            const jsonData = await response.json();
            setCountries(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    }

    // useEffect makes a fetch request every time this component is rendered
    useEffect(() => {
        getCountries();
    }, []);

    return (
        <div className="container mt-5">
            <table className="table mt-5 text-left">
                <thead>
                    <tr>
                        <th>Riigid</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map(s => (
                        <tr key={s.id}>
                            <td>
                                <Link
                                    style={{ display: "block", margin: "1rem 0" }}
                                    to={`/continents/countries/${s.id}/cities`}
                                    key={s.id}>
                                    {s.country}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <Outlet />
            </table>
        </div>
    )
}

export default ListCountries;