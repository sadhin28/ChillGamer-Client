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
import Updaterivew from "../components/Updaterivew";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://chillgamer-server.onrender.com/top-rated')
            },
            {
                path:'/allreviews',
                element:<AllReviews></AllReviews>,
                loader:()=>fetch('https://chillgamer-server.onrender.com/reviews')
            },
             {
                path: "/ReviewDetails/:id",
                element:<ReviewDetails></ReviewDetails>,
                loader: ({ params }) => fetch('https://chillgamer-server.onrender.com/reviews')
                    .then(res => res.json())
                    .then(reviews => reviews.find(review => review._id === params.id))
            },
            {
                path:'/addreviews',
                element:<Privateroute><AddReview></AddReview></Privateroute>
            },
            {
                path:'/myreviwe',
                element:<Privateroute><MyReviews></MyReviews></Privateroute>,
                 loader: () => fetch('https://chillgamer-server.onrender.com/reviews'),
            },
            {
                path:'/gamewatchlist',
                element:<Privateroute><GameWatchList></GameWatchList></Privateroute>,
                loader:()=>fetch('https://chillgamer-server.onrender.com/watch_list')
            },
            {
                path:'/updateReview/:id',
                element:<Privateroute><Updaterivew></Updaterivew></Privateroute>,
                 loader: ({ params }) => fetch(`https://chillgamer-server.onrender.com/reviews/${params.id}`)
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