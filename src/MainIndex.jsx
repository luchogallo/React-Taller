import { useNavigate } from "react-router-dom";

export const MainIndex = () => {

    const navigate = useNavigate();

    const postobonPage = () => {
        navigate('/postobon');
    }

    const movistarPage = () => {
        navigate('/movistar');
    }

    return(
        <>
            <div className="image-products">
                <figure onClick={postobonPage}>
                    <img src="./public/img/Postobon.png" alt="Postobon" />
                </figure>
                <figure onClick={movistarPage}>
                    <img src="./public/img/Movistar.png" alt="Movistar" />
                </figure>
            </div>
        </>
    );
}