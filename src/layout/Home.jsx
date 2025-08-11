import { createContext, useContext, useEffect, useState } from 'react';
import Slider from '../components/slider/Slider';
import TopGame from '../components/TopGame';
import { useLoaderData } from 'react-router-dom';
import LoadingSpiner from '../components/LoadingSpiner'
import HighestRatedGame from '../components/HighestRatedGame';
import GameIndustry from '../components/GameIndustry';
import Faqs from '../components/Faqs';
import { ThemeContext } from '../provider/ThemeProvider';
import ThemeToggle from '../components/ToggleButton';

export const HomeContext = createContext();

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

  // Apply or remove dark mode class on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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
    <div className={`w-11/12 mx-auto `}>
      <Slider></Slider>
  
      <HomeContext.Provider value={shortedReviews}>
        <HighestRatedGame></HighestRatedGame>
      </HomeContext.Provider>
      <TopGame></TopGame>
      <GameIndustry></GameIndustry>
      <Faqs></Faqs>
    </div>
  );
};

export default Home;