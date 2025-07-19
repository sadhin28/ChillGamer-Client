import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Errorpage from "../components/Errorpage";
import Home from "../layout/Home";
import AllReviews from "../components/AllReviews";
import AddReview from "../components/AddReview";
import MyReviews from "../components/MyReviews";
import GameWatchList from "../components/GameWatchList";
import Lgoing from "../components/Lgoing";
import Register from "../components/Register";
import Privateroute from "./Privateroute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allreviews',
                element:<AllReviews></AllReviews>
            },
            {
                path:'/addreviews',
                element:<Privateroute><AddReview></AddReview></Privateroute>
            },
            {
                path:'/myreviwe',
                element:<Privateroute><MyReviews></MyReviews></Privateroute>
            },
            {
                path:'/gamewatchlist',
                element:<Privateroute><GameWatchList></GameWatchList></Privateroute>
            },
            {
                path:"/login",
                element:<Lgoing></Lgoing>
            },
            {
                path:'/register',
                element:<Register></Register>
            }

        ]
    }
])

export default router;