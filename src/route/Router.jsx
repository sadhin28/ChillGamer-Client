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
import ReviewDetails from "../components/ReviewDetails";

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
                element:<AllReviews></AllReviews>,
                loader:()=>fetch('http://localhost:5000/reviews')
            },
             {
                path: "/ReviewDetails/:id",
                element:<ReviewDetails></ReviewDetails>,
                loader: ({ params }) => fetch('https://chill-game-server-tau.vercel.app/reviews')
                    .then(res => res.json())
                    .then(reviews => reviews.find(review => review._id === params.id))
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