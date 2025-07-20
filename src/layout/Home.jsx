import  { createContext, useEffect, useState } from 'react';
import Slider from '../components/slider/Slider';
import TopGame from '../components/TopGame';
import { useLoaderData } from 'react-router-dom';
import LoadingSpiner from '../components/LoadingSpiner'
import HighestRatedGame from '../components/HighestRatedGame';
import GameIndustry from '../components/GameIndustry';

export const HomeContext = createContext();

const Home = () => {
     const [loading, setLoading] = useState(true);

    const shortedReviews = useLoaderData();

    useEffect(() => {
        if (shortedReviews) {
            setLoading(false);
        }
    }, [shortedReviews]);

    if (loading) {
        return <LoadingSpiner></LoadingSpiner>
    };
    return (
        <div className='w-11/12 mx-auto'>
          <Slider></Slider>
            <HomeContext.Provider value={shortedReviews}>
               <HighestRatedGame></HighestRatedGame>
            </HomeContext.Provider>
             <TopGame></TopGame>
             <GameIndustry></GameIndustry>
        </div>
    );
};

export default Home;