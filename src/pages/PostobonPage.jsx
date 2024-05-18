import { useEffect, useState } from "react";
import { postobonData } from "../helper/postobon";
import { PostobonList } from "../components/PostobonList";

export const PostobonPage = () => {

    const [postobon, setPostobon] = useState([]);

    useEffect(() => {
        setPostobon(postobonData);
    }, [postobon]);

    return(
        <>
            <div className="product-card">
                {
                    postobon.map(data => (
                        <PostobonList
                            key={data.id}
                            data={data}
                        />
                    ))
                }
            </div>
        </>
    );
}