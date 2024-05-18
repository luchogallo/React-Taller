
import { useEffect, useState } from "react";
import { MovistarList } from "../components/MovistarList";
import { movistarData } from "../helper/movistar";

export const MovistarPage = () => {

    const [movistar, setMovistar] = useState([]);

    useEffect(() => {
        setMovistar(movistarData);
    }, [movistar]);

    return(
        <>
            <div className="product-card">
                {
                    movistar.map(data => (
                        <MovistarList
                            key={data.id}
                            data={data}
                        />
                    ))
                }
            </div>
        </>
    );
}