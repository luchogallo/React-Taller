import { Route, Routes } from "react-router-dom";
import { PostobonPage } from "../pages/PostobonPage";
import { MovistarPage } from "../pages/MovistarPage";
import { MainIndex } from "../MainIndex";

export const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path="postobon" element={<PostobonPage />} />
                <Route path="movistar" element={<MovistarPage />} />

                <Route path="/" element={ <MainIndex />} />
            </Routes>
        </>
    );
}