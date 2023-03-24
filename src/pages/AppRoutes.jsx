import Login from './Login'
import Home from './Home'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
    
}

export default AppRoutes;