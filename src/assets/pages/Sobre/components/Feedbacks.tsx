import FeedbacksClientes from '../../../../dados/feedbacks.json'

import { IoMdStar as Estrela } from "react-icons/io";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Feedbacks() {

    const clientesFeed = FeedbacksClientes.data

    const avaliacoes = (elemento: any) => {
        const estrelas = []

        for (let i = 0; i < elemento.estrelas; i++) {
            estrelas.push(<Estrela />)
        }

        return (
            <div className="flex justify-center text-yellow-600">
                {estrelas}
            </div>
        )
    }


    return (
        <>
            <section className='flex flex-col items-center justify-center gap-5 h-[70vh] py-10 text-center bg-[#ccc] md:h-[65vh]'>
                <div className='flex flex-col gap-3'>
                    <h4 className='font-bold text-3xl'>Depoimentos</h4>
                    <div className='flex justify-between items-center w-full px-4 md:justify-center'>
                        <hr className='w-[20%] h-[2px] bg-white' />
                        <h4 className='text-sm md:text-base md:mx-4'>O que pensam sobre nós</h4>
                        <hr className='w-[20%] h-[2px] bg-white' />
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    className='w-full h-[60vh]'
                >

                    {
                        clientesFeed.map((el, index) =>
                            <SwiperSlide key={index} className='p-5'>
                                <div>
                                    <h3 className="lg:text-xl">{el.comentario}</h3>
                                    <h4 className='font-bold text-red-600 my-2'>{el.nome}</h4>
                                    {
                                        avaliacoes(el)
                                    }
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </section >

        </>
    )
}