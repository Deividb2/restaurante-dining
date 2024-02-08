import { IoMdStar as Estrela } from "react-icons/io";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Feedbacks() {

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
            <section className='flex flex-col items-center justify-center gap-5 h-[60vh] py-10 text-center bg-[#ccc]'>
                <div className='flex flex-col gap-3'>
                    <h4 className='font-bold text-3xl'>Depoimentos</h4>
                    <div className='flex justify-between items-center w-screen px-4'>
                        <hr className='w-[20%] h-[2px] bg-white' />
                        <h4 className='text-sm'>O que pensam sobre nós</h4>
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
                    className='w-screen h-[60vh]'
                >

                    {
                        dados.map((el, index) =>
                            <SwiperSlide key={index} className=' p-5'>
                                <div>
                                    <h3>{el.comentario}</h3>
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

const dados = [
    {
        nome: 'Juliana Torres',
        comentario: 'Uma experiência gastronômica encantadora com uma vista deslumbrante!',
        estrelas: 5
    },
    {
        nome: 'Pedro Silva',
        comentario: 'Comida deliciosa em um ambiente sereno à beira do lago.',
        estrelas: 4
    },
    {
        nome: 'Carolina Santos',
        comentario: 'Um refúgio perfeito para os amantes da natureza e da boa comida.',
        estrelas: 5
    },
    {
        nome: 'Rafael Oliveira',
        comentario: 'O cenário ideal para um jantar romântico com pratos incríveis.',
        estrelas: 3
    },
    {
        nome: 'Ana Costa',
        comentario: 'Um lugar onde a tranquilidade se encontra com a excelência culinária.',
        estrelas: 4
    },
    {
        nome: 'Lucas Pereira',
        comentario: 'Inesquecíveis sabores à beira das águas calmas.',
        estrelas: 5
    },
    {
        nome: 'Isabela Souza',
        comentario: 'Um verdadeiro paraíso gastronômico com vistas panorâmicas.',
        estrelas: 5
    },
    {
        nome: 'Gabriel Almeida',
        comentario: 'O restaurante perfeito para uma refeição relaxante com a família.',
        estrelas: 4
    },
    {
        nome: 'Mariana Ferreira',
        comentario: 'Comer aqui é como ter um banquete para os sentidos em meio à natureza.',
        estrelas: 5
    },
    {
        nome: 'Thiago Rodrigues',
        comentario: 'Uma experiência que alimenta não apenas o corpo, mas também a alma.',
        estrelas: 5
    },
]