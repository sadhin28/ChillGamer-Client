import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import LoadingSpiner from "./LoadingSpiner";
import { IoMdArrowDropdown } from "react-icons/io";
import ReactStars from "react-stars";

const AllReviews = () => {
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const loadReviews = useLoaderData();

  useEffect(() => {
    if (loadReviews) {
      setLoading(false);
    }
  }, [loadReviews]);

  if (loading) {
    return <LoadingSpiner />;
  }

  const filteredReviews = selectedGenre
    ? loadReviews.filter((review) => review.genres === selectedGenre)
    : loadReviews;

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortOption === "rating") {
      return b.rating - a.rating;
    }
    if (sortOption === "year") {
      return b.publish_year - a.publish_year;
    }
    return 0;
  });

  return (
    <div>
      <div className="w-11/12 mt-5 mx-auto min-h-screen">
        {/* Dropdowns */}
        <div className="flex gap-4 relative z-20">
          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowSort(!showSort);
                setShowFilter(false);
              }}
              className="bg-[#D142ED] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#b734cb] transition"
            >
              Sort <IoMdArrowDropdown className={`transition-transform ${showSort ? "rotate-180" : ""}`} />
            </button>
            {showSort && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black/10">
                <button
                  onClick={() => {
                    setSortOption("rating");
                    setShowSort(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Sort by Rating
                </button>
                <button
                  onClick={() => {
                    setSortOption("year");
                    setShowSort(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Sort by Year
                </button>
              </div>
            )}
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowFilter(!showFilter);
                setShowSort(false);
              }}
              className="bg-[#7B7CFB] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#6364e0] transition"
            >
              Filter <IoMdArrowDropdown className={`transition-transform ${showFilter ? "rotate-180" : ""}`} />
            </button>
            {showFilter && (
              <div className="absolute mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black/10">
                <button
                  onClick={() => {
                    setSelectedGenre("");
                    setShowFilter(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  All Genres
                </button>
                {Array.from(new Set(loadReviews.map((review) => review.genres))).map((genre, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedGenre(genre);
                      setShowFilter(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {genre}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
          {sortedReviews.map((review) => (
            <div
              key={review._id}
              className="rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl shadow-lg bg-[url('/assets/gaming1.jpg')] bg-cover bg-center shadow-red-400 p-4 flex flex-col"
            >
              <img
                src={review.game_image}
                alt="game cover"
                className="rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl w-full aspect-[5/3] object-cover"
              />
              <div className="mt-4 text-black flex flex-col bg-[rgba(255,255,255,0.3)] flex-grow gap-2 rounded-lg p-1">
                <h2 className="text-xl font-bold">Game Title: {review.game_title}</h2>
                <ReactStars count={5} value={review.rating} size={20} edit={false} activeColor="#ffd700" />
                <p className="text-base font-medium flex-grow">Genres: {review.genres}</p>
                <p className="text-base font-medium flex-grow">Publish Year: {review.publish_year}</p>
                <Link to={`/ReviewDetails/${review._id}`} className="border w-30 text-center rounded-xl hover:bg-green-200 mt-2  btn-neutral">
                  Explore Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;