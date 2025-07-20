import { useContext } from "react";

import { Link } from "react-router-dom";
import { HomeContext } from "../layout/Home";
import ReactStars from "react-stars";

const HighestRatedGame = () => {

    const topReviewsData = useContext(HomeContext);

    return (
        <div className="mt-5">
            <h2 className="text-3xl font-bold mb-6 text-center py-2">Highest Rated Games</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-5">
                {
                    topReviewsData.map(review => (
                        <div data-aos='zoom-in' key={review._id} className="rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl shadow-lg bg-[url('/assets/gaming1.jpg')] bg-cover bg-center shadow-red-400 p-2 flex flex-col">
                            <img src={review.game_image} alt="game cover image" className="rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl w-full aspect-[5/3] object-cover" />
                            <div className="mt-2 text-black flex flex-col bg-[rgba(255,255,255,0.3)] flex-grow rounded-lg p-1">
                                <h2 className="text-sm font-bold">Game Title: {review.game_title}</h2>
                                <ReactStars count={5} value={review.rating} size={15} edit={false} activeColor="#ffd700" />
                                <h2 className="text-sm flex-grow">
                                    <span className="font-semibold">Description:</span> {review.review.split(' ').slice(0, 7).join(' ')}...
                                </h2>
                                <Link to={`/ReviewDetails/${review._id}`} className="border w-30 text-center rounded-xl hover:bg-green-200 mt-2  btn-neutral">Explore Details</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HighestRatedGame;