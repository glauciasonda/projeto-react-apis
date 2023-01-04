import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home"
import MyPage from "../Pages/MyPage/MyPage";
import Detail from "../Pages/Details/Detail"

const Router = () => {
    return(
            <BrowserRouter>            
                <Routes>
                    <Route index element={ <Home/> } />
                    <Route path="mypage" element={<MyPage/> } />
                    <Route path="detail/:idPokemon" element={<Detail/>} />
                </Routes>
            </BrowserRouter> 
            

    )

}
export default Router 