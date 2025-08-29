import { useContext, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-stars";
import { AuthContext } from "../provider/AuthProvider";

const GameWatchList = () => {
    const loadWatchList = useLoaderData();
    const { user } = useContext(AuthContext);
    const [watchListData, setWatchListData] = useState(
        loadWatchList.filter(item => item.loggedUserEmail === user.email)
    );

    const handleDeleteWL = (_id) => {
        fetch(`https://chill-gamer-server-sigma-two.vercel.app/watch_list/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                setWatchListData(prev => prev.filter(item => item._id !== _id));
            }
        });
    };

    return (
        <>
            {watchListData.length > 0 ? (
                <div className="min-h-screen flex">
                    <div className="w-full   overflow-hidden shadow-xl bg-gradient-to-br from-black via-gray-900 to-gray-800 px-5 py-5">
                        <h2 className="text-3xl font-bold text-white mb-6">My Game Watchlist</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-white text-sm md:text-base border-separate border-spacing-y-2">
                                <thead className="text-left text-white border-b border-gray-300 uppercase">
                                    <tr>
                                        <th className="px-4 py-2">#</th>
                                        <th className="px-4 py-2">Game Title</th>
                                        <th className="px-4 py-2">Ratings</th>
                                        <th className="px-4 py-2">Genres</th>
                                        <th className="px-4 py-2 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {watchListData.map((item, index) => (
                                        <tr
                                            key={item._id}
                                            className="bg-white/10 hover:bg-white/20 text-white rounded-xl"
                                        >
                                            <td className="px-4 py-3">{index + 1}</td>
                                            <td className="px-4 py-3 font-medium">{item.game_title}</td>
                                            <td className="px-4 py-3">
                                                <ReactStars
                                                    count={5}
                                                    value={item.rating}
                                                    size={20}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                            </td>
                                            <td className="px-4 py-3">{item.genres}</td>
                                            <td className="px-4 py-3 text-center">
                                                <button
                                                    onClick={() => handleDeleteWL(item._id)}
                                                    className="text-red-500 hover:text-red-700 transition-colors duration-200 text-2xl"
                                                >
                                                    <MdDeleteForever />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-11/12 mx-auto min-h-screen flex justify-center items-center">
                    <h1 className="text-center text-red-500 font-bold text-xl md:text-3xl lg:text-5xl">
                        No WatchList Item has been added by you!
                    </h1>
                </div>
            )}
        </>
    );
};

export default GameWatchList;
