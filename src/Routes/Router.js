import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import MyPage from "../Pages/MyPage";
import Detail from "../Pages/Detail";


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