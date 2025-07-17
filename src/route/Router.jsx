import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Errorpage from "../components/Errorpage";
import Home from "../layout/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default router;