import { Link, useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import ReactStars from "react-stars";

const MyReviews = () => {

    const loadReviews = useLoaderData();
    const { user } = useContext(AuthContext);

    const [userReviews, setUserReviews] = useState(loadReviews.filter(review => review.user_email === user.email));

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure you want to delete?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/reviews/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setUserReviews(prevReviews => prevReviews.filter(review => review._id !== _id));
                            Swal.fire({
                                title: "Successfully Deleted!",
                                text: "Your review has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    
            }
        });
    }

    return (
        <div className="w-11/12 mt-5 mb-5 mx-auto min-h-screen">
            {userReviews.length > 0 ? (
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        userReviews.map(review => (
                            <div key={review._id} className="rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl shadow-lg bg-[url('/assets/gaming1.jpg')] bg-cover bg-center shadow-red-400 p-4 flex flex-col">
                                <img src={review.game_image} alt="game cover image" className="rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl w-full aspect-[5/3] object-cover" />
                                <div className="mt-4 text-black flex flex-col bg-[rgba(255,255,255,0.3)] flex-grow gap-2 rounded-lg p-1">
                                    <h2 className="text-xl font-bold">Game Title: {review.game_title}</h2>
                                    <div className="flex gap-2 items-center">
                                        <p className="text-base font-medium">Ratings:</p>
                                        <ReactStars count={5} value={review.rating} size={20} edit={false} activeColor="#ffd700" />
                                    </div>
                                    <p className="text-base font-medium flex-grow">Genres: {review.genres}</p>
                                    <div className="flex justify-between">
                                        <Link to={`/updateReview/${review._id}`} className="border w-30 text-center rounded-xl hover:bg-green-200 mt-2  btn-neutral">Update</Link>
                                        <button onClick={() => handleDelete(review._id)} className="border w-30 text-center rounded-xl hover:bg-green-200 mt-2  btn-neutral">Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            ) : (
                <div className="min-h-screen flex justify-center items-center w-11/12 mx-auto">
                    <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-center text-red-500">No reviews have been added by you!</h1>
                </div>
            )}
        </div>
    );
};

export default MyReviews;