import fundoCaroulsel from "../../../public/imgs/fundoCarousel.jpg";
import { Link } from "react-router-dom";

import { CiBurger, CiPizza } from "react-icons/ci";

// Swiper
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";

export default function CarouselCards() {
  return (
    <>
      <section
        className="flex items-center justify-center h-screen px-2 bg-no-repeat bg-center bg-cover md:justify-start md:px-4 lg:px-14 xl:px-28"
        style={{ backgroundImage: `url(${fundoCaroulsel})` }}
      >
        <div>
          <Swiper
            className="bg-white w-[90vw] max-w-[25rem] md:w-[45vw] md:h-[75vh] lg:w-[35vw] lg:h-[80vh] xl:w-[30vw]"
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation
            loop={true}
            autoplay={{
              delay: 4000,
            }}
          >
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center text-center my-6">
                <CiBurger className="text-red-600 text-6xl" />
                <h4 className="font-semibold text-2xl">Burgers</h4>
                <p className="my-5 text-sm w-[60%] md:w-[70%] lg:text-base xl:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  accusantium, molestias, et debitis laboriosam ea nihil
                  deserunt iure, iste quis eos. Magnam, dolor eveniet pariatur
                  cupiditate molestiae dolorem quis similique.
                </p>

                <Link
                  to="/"
                  className="py-3 px-8 rounded-full bg-red-600 text-white font-semibold
                    md:hover:pr-12 transition-[padding-right] delay-75 ease"
                >
                  VER MENU
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center justify-center text-center my-6">
                <CiPizza className="text-red-600 text-6xl" />
                <h4 className="font-semibold text-2xl">Pizza</h4>
                <p className="my-5 text-sm w-[60%] md:w-[70%] lg:text-base xl:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  accusantium, molestias, et debitis laboriosam ea nihil
                  deserunt iure, iste quis eos. Magnam, dolor eveniet pariatur
                  cupiditate molestiae dolorem quis similique.
                </p>

                <Link
                  to="/"
                  className="py-3 px-8 rounded-full bg-red-600 text-white font-semibold
                    md:hover:pr-12 transition-[padding-right] delay-75 ease"
                >
                  VER MENU
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
