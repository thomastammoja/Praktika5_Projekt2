import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import '../App.css';

const ListContinents = () => {

    const [continents, setContinents] = useState([]);

    const getContinents = async () => {
        try {

            const response = await fetch("http://localhost:8000/api/continents");
            const jsonData = await response.json();
            setContinents(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    }
    
    // useEffect makes a fetch request every time this component is rendered
    useEffect(() => {
        getContinents();
    }, []);

    return (
        <div className="container mt-5">
            <table className="table mt-5 text-left">
                <thead>
                    <tr>
                        <th>Mandrid</th>
                    </tr>
                </thead>
                <tbody>
                    {continents.map(s => (
                        <tr>
                            <td>
                                <Link
                                    style={{ display: "block", margin: "1rem 0" }}
                                    to={`/continents/${s.id}/countries`}
                                    key={s.id}>
                                    {s.continent}
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

export default ListContinents;