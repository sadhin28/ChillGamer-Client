import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './slider.css';

const Slider = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div className=''>
            <AutoplaySlider play={true} interval={3000} className='w-full aspect-[3/1]'>
                <div className='w-full rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl bg-blue-500 lg:p-5 md:p-4 p-3 flex items-center gap-5'>
                    <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2025/07/garena-free-fire-max-redeem-codes-for-january-19-1752911532.webp" alt="slider img" className='w-5/12 object-center aspect-[3/2] object-cover rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl rounded-3xl' />
                    <div className='w-7/12 text-black'>
                        <h2 className='lg:text-5xl md:text-3xl font-bold text-xl'>Free Fire</h2>
                        <p className='lg:text-2xl md:text-lg text-sm lg:mt-4 md:mt-3 mt-2'>A Game Review Application</p>
                    </div>
                </div>
                <div className='w-full rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl bg-amber-400 lg:p-5 md:p-4 p-3 flex items-center gap-5'>
                    <img src="https://tse3.mm.bing.net/th/id/OIP.Es3IMuEFBityxSk-0ggl6AHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="slider img" className='w-5/12 object-center aspect-[3/2] object-cover rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl rounded-3xl' />
                    <div className='w-7/12 text-black'>
                        <h2 className='lg:text-5xl md:text-3xl text-xl font-bold'>RPG GAME REVIEW</h2>
                        <p className='lg:text-2xl md:text-lg text-sm lg:mt-4 md:mt-3 mt-2'>Rate A Game You Have Played</p>
                    </div>
                </div>
                <div className='w-full rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl bg-[#2FCA18FF] lg:p-5 md:p-4 p-3 flex items-center gap-5'>
                    <img src="https://tse3.mm.bing.net/th/id/OIP.3OuhpbgrdlD2oYgwywdxLgHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="slider img" className='w-5/12 object-center aspect-[3/2] object-cover rounded-tr-none rounded-bl-none rounded-tl-3xl rounded-br-3xl rounded-3xl' />
                    <div className='w-7/12 text-black'>
                        <h2 className='lg:text-5xl md:text-3xl font-bold text-xl'>ADVENTURE GAME</h2>
                        <p className='lg:text-2xl md:text-lg text-sm lg:mt-4 md:mt-3 mt-2'>Explore From Others Experience</p>
                    </div>
                </div>
            </AutoplaySlider>
        </div>
    );
};

export default Slider;