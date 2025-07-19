import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import LoadingSpiner from './LoadingSpiner';
import { toast } from 'react-toastify';
import ReactStars from 'react-stars';
import { Link, useLoaderData } from 'react-router-dom';

const ReviewDetails = () => {
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(true);
    const reviewData = useLoaderData();
    const { game_image, game_title, review, rating, publish_year, genres, user_email, user_name } = reviewData;
    const addToWatchList = () => {

        if (!user) {
            toast.error("You must be logged in to add to the WatchList", {
                position: "top-center",
                autoClose: 2000,
            });
            return;
        }

        const loggedUserName = user.displayName;
        const loggedUserEmail = user.email;
        const newWatchListData = { game_image, game_title, review, rating, publish_year, genres, user_email, user_name, loggedUserEmail, loggedUserName };

        fetch('http://localhost:5000/watch_list', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newWatchListData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success(`${game_title} Successfully Added to WatchList`, {
                        position: "top-center",
                        autoClose: 2000,
                    });
                };
            })
            .catch((err) => toast.error(err.message));
    }

    useEffect(() => {
        if (reviewData) {
            setLoading(false);
        }
    }, [reviewData]);

    if (loading) {
        return <LoadingSpiner></LoadingSpiner>
    };
    return (
        <div className='mt-10 mb-10'>

            <div className="flex justify-center items-center mt-5 w-11/12 mx-auto">

                <div className="card rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl w-full  shrink-0 shadow-lg bg-[url('/assets/gaming1.jpg')] bg-cover bg-center shadow-red-400 p-5">
                    <div className='mt-2 mb-2'>
                        <Link to="/allreviews" className=" text-lg font-semibold text-gray-700 hover:underline">
                            ← Back to home
                        </Link>
                    </div>
                    <img src={game_image} alt="game cover image" className="rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl w-full aspect-[5/3] object-cover" />
                    <div className="mt-4 text-black flex flex-col bg-[rgba(255,255,255,0.3)] flex-grow rounded-lg p-1">

                        <h2 className="md:text-2xl text-xl font-bold">Game Title: {game_title}</h2>
                        <ReactStars count={5} value={rating} size={20} edit={false} activeColor="#ffd700" />
                        <p className="md:text-lg text-base font-medium mt-2">Review Description:</p>
                        <p className="md:text-base text-sm">{review}</p>
                        <div className="mt-2 flex gap-2">
                            <p className="md:text-lg text-base font-medium w-1/2">Publishing Year: <span className="font-normal">{publish_year}</span></p>
                            <p className="md:text-lg text-base font-medium w-1/2">Genres: <span className="font-normal">{genres}</span></p>
                        </div>
                        <p className="md:text-lg text-base font-medium mt-2">Reviewer's Name: <span className="font-normal">{user_name}</span></p>
                        <p className="md:text-lg text-base font-medium mt-2">Reviewer's Email: <span className="font-normal">{user_email}</span></p>
                        <div className='flex justify-center mt-2 '> <button onClick={addToWatchList} className=" rounded bg-blue-300   hover:bg-green-200 w-40 p-2 text-center  mt-2">Add to WatchList</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;