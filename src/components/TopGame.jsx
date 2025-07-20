import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const TopGame = () => {
    return (
        <div className="mt-10">
            <h2 className="lg:text-5xl md:text-3xl text-xl font-medium text-center">The Best Games of 2025 You Can Try</h2>
            <div className="mt-5">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 1.5,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl w-full" src="https://i.ytimg.com/vi/XoiERpwyy6Y/maxresdefault.jpg" alt="1" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl w-full" src="https://image.api.playstation.com/vulcan/ap/rnd/202311/0203/37bd2f7293cecbc4045d33578d487127ccaa1840eb15eeb5.png" alt="2" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYbsjyOPBwwB3FZSA9l-vYZ2GBhT6ZvGrt0g&s" alt="3" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl w-full" src="https://gideonsgaming.com/wp-content/uploads/2024/04/Helldivers-2-Review.jpg" alt="4" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl w-full" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/senua-s-saga-hellblade-2-s-2024-release-window-has-been-a-long-time-coming.jpg" alt="5" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl w-full" src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1778820/capsule_616x353.jpg?t=1729824657" alt="6" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8sJSZ8pDKTho7MwAW_CJAD7KVfv6tPuOYKA&s" alt="8" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7SCLVYUJnFk5R7Svbzelq2duTdBWMHaNkw&s" alt="9" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEFQV-UEvXw0NLmO7Cm8Y9Y6_JbWoLmgpFw&s" alt="10" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlpJe-ISuj1uPVmHZaqTXH3PiZTg3QSAZ3A&s" alt="11" /></SwiperSlide>
                    <SwiperSlide><img className="aspect-[3/2] rounded-xl w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAyvv41ODkhvfvQmosJHjfZ_lYYUdC_EzL4g&s" alt="12" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};
export default TopGame;