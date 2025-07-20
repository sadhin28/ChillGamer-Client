import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const GameIndustry = () => {
    return (
       <div className="my-16 px-4">
  <h2 className="text-3xl font-bold mb-6 text-center py-2">
    Top 10 Game Maker Industries
  </h2>

  <div className="slider-container">
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      breakpoints={{
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2.5 },
        1024: { slidesPerView: 3.5 },
      }}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {[
        {
          title: "Nintendo",
          desc: "A pioneer of gaming, known for iconic franchises like Mario, Zelda, and Pokémon, blending nostalgia with innovation.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwUY66MkJS0Koui1MTVDXYYtXbkfX12ttq3fdpfJN5-_r9WF9SZKC1OGHz6vq4Jvq5T8&usqp=CAU"
        },
        {
          title: "Sony Interactive Entertainment",
          desc: "The creators of PlayStation, offering cutting-edge technology and a vast library of award-winning games.",
          img: "https://sonyinteractive.com/tachyon/2024/06/featuredimage-General.jpg"
        },
        {
          title: "Microsoft Xbox Game Studios",
          desc: "Makers of legendary franchises like Halo and Forza, redefining gaming with Xbox and Game Pass.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcHme6TDdvFxSy18xCplPSgKabZ7QTELdtg&s"
        },
        {
          title: "Epic Games",
          desc: "Revolutionizing gaming with Fortnite and the Unreal Engine, empowering creators globally.",
          img: "https://cdn2.unrealengine.com/egs-brand-gradient-1920x1080-fee5291b4190.jpg"
        },
        {
          title: "Valve Corporation",
          desc: "Developers of Half-Life and Steam, setting benchmarks for PC gaming and digital distribution.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH-m1j1z2eSlIEGR0owc_1B6opYWGYPX6FeQ&s"
        },
        {
          title: "Electronic Arts (EA)",
          desc: "Known for FIFA, The Sims, and Battlefield, EA has been a mainstay in gaming for decades.",
          img: "https://www.logitech.com/content/dam/logitech/vc/nl/resource-center/case-study/electronic-arts-logo.png.imgw.1000.1000.jpg"
        },
        {
          title: "Ubisoft",
          desc: "Creators of Assassin’s Creed, Far Cry, and Just Dance, delivering diverse gaming adventures.",
          img: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1Cgf93EyvJuQEluy1j6yxv/d9cfe0ea1f62619ee48667bcedc3e6eb/NeutralLogo_960x540.jpg"
        },
        {
          title: "Activision Blizzard",
          desc: "Behind Call of Duty and World of Warcraft, they have left an indelible mark on gaming culture.",
          img: "https://variety.com/wp-content/uploads/2015/05/activision-blizzard.jpg?w=1000&h=562&crop=1"
        },
        {
          title: "Tencent Games",
          desc: "A major player in mobile and online gaming, owning stakes in many international studios.",
          img: "https://static.apiseven.com/uploads/2024/06/03/rtJUR849_tencent-games.png"
        },
        {
          title: "Square Enix",
          desc: "Masters of RPGs like Final Fantasy and Kingdom Hearts, crafting rich narratives and immersive worlds.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz8QYNRgtsfTuGpIE5av6qP0SI3uta5vuQNA&s"
        },
      ].map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden border">
            <img
              src={item.img}
              alt={item.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>
    );
};

export default GameIndustry;